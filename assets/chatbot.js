/**
 * Custom FAQ Chatbot - Main JavaScript
 * Handles all chatbot functionality
 */

(function() {
    'use strict';
    
    /**
     * Find the best matching answer for a user question
     * @param {string} userQuestion - The question from the user
     * @returns {object} - Object with answer and whether it was found
     */
    function findAnswer(userQuestion) {
        const question = userQuestion.toLowerCase().trim();
        
        // If empty question, return fallback
        if (!question) {
            return {answer: cfaqFallbackResponse, found: false};
        }
        
        let bestMatch = null;
        let bestScore = 0;
        
        // Loop through all Q&A pairs
        for (let i = 0; i < cfaqData.length; i++) {
            const qna = cfaqData[i];
            let score = 0;
            let matchedKeywords = 0;
            
            // Check how many keywords match
            for (let j = 0; j < qna.keywords.length; j++) {
                const keyword = qna.keywords[j].toLowerCase();
                
                // Exact keyword match (full word)
                const wordRegex = new RegExp('\\b' + keyword + '\\b', 'i');
                if (wordRegex.test(question)) {
                    score += 10;
                    matchedKeywords++;
                }
                // Partial match (keyword is substring)
                else if (question.includes(keyword)) {
                    score += 5;
                    matchedKeywords++;
                }
            }
            
            // If we found matches and score is better than current best
            if (matchedKeywords > 0 && score > bestScore) {
                bestScore = score;
                bestMatch = qna.answer;
            }
        }
        
        // Return best match or fallback
        if (bestMatch) {
            return {answer: bestMatch, found: true};
        } else {
            return {answer: cfaqFallbackResponse, found: false};
        }
    }
    
    /**
     * Save unanswered question to server
     * @param {string} question - The unanswered question
     */
    function saveUnansweredQuestion(question) {
        console.log('Attempting to save unanswered question:', question);
        
        // Check if cfaqAjax is available (WordPress localized script)
        if (typeof cfaqAjax === 'undefined') {
            console.error('AJAX configuration not found. cfaqAjax is undefined.');
            console.log('This usually means wp_localize_script was not called properly.');
            return;
        }
        
        console.log('AJAX config found:', cfaqAjax);
        
        // Create form data
        const formData = new FormData();
        formData.append('action', 'cfaq_save_unanswered');
        formData.append('nonce', cfaqAjax.nonce);
        formData.append('question', question);
        
        console.log('Sending AJAX request to:', cfaqAjax.ajaxurl);
        
        // Send to server
        fetch(cfaqAjax.ajaxurl, {
            method: 'POST',
            body: formData
        })
        .then(function(response) {
            console.log('Response status:', response.status);
            return response.json();
        })
        .then(function(data) {
            console.log('Server response:', data);
            if (data.success) {
                console.log('✅ Unanswered question saved successfully:', question);
            } else {
                console.error('❌ Failed to save question:', data.data);
            }
        })
        .catch(function(error) {
            console.error('❌ Error saving unanswered question:', error);
        });
    }
    
    /**
     * Add a message to the chat interface
     * @param {string} message - The message text
     * @param {string} type - 'user' or 'bot'
     * @param {HTMLElement} container - The messages container
     */
    function addMessage(message, type, container) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'cfaq-message cfaq-' + type + '-message';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'cfaq-message-content';
        contentDiv.textContent = message;
        
        messageDiv.appendChild(contentDiv);
        container.appendChild(messageDiv);
        
        // Scroll to bottom with smooth animation
        setTimeout(function() {
            container.scrollTop = container.scrollHeight;
        }, 100);
    }
    
    /**
     * Show typing indicator
     * @param {HTMLElement} container - The messages container
     * @returns {HTMLElement} - The typing indicator element
     */
    function showTypingIndicator(container) {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'cfaq-message cfaq-bot-message cfaq-typing-indicator';
        typingDiv.id = 'cfaq-typing';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'cfaq-message-content';
        
        const dot1 = document.createElement('span');
        const dot2 = document.createElement('span');
        const dot3 = document.createElement('span');
        
        contentDiv.appendChild(dot1);
        contentDiv.appendChild(dot2);
        contentDiv.appendChild(dot3);
        
        typingDiv.appendChild(contentDiv);
        container.appendChild(typingDiv);
        
        container.scrollTop = container.scrollHeight;
        
        return typingDiv;
    }
    
    /**
     * Remove typing indicator
     */
    function removeTypingIndicator() {
        const typingIndicator = document.getElementById('cfaq-typing');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    /**
     * Handle user message submission
     * @param {string} userMessage - The user's message
     * @param {HTMLElement} messagesContainer - The messages container
     * @param {HTMLElement} inputField - The input field to clear
     */
    function handleUserMessage(userMessage, messagesContainer, inputField) {
        // Trim the message
        userMessage = userMessage.trim();
        
        // Don't process empty messages
        if (!userMessage) {
            return;
        }
        
        // Add user message to chat
        addMessage(userMessage, 'user', messagesContainer);
        
        // Clear input field
        inputField.value = '';
        
        // Show typing indicator
        const typingIndicator = showTypingIndicator(messagesContainer);
        
        // Simulate thinking time (500-1500ms for realistic feel)
        const thinkingTime = 500 + Math.random() * 1000;
        
        setTimeout(function() {
            // Remove typing indicator
            removeTypingIndicator();
            
            // Find and add bot response
            const result = findAnswer(userMessage);
            console.log('Answer result for "' + userMessage + '":', result);
            addMessage(result.answer, 'bot', messagesContainer);
            
            // If no answer was found, save the question
            if (!result.found) {
                console.log('No answer found, saving question...');
                saveUnansweredQuestion(userMessage);
            } else {
                console.log('Answer found, not saving question.');
            }
        }, thinkingTime);
    }
    
    /**
     * Initialize Popup Chatbot
     */
    function initPopupChatbot() {
        const popupButton = document.getElementById('cfaq-popup-button');
        const popupWindow = document.getElementById('cfaq-popup-window');
        const closeButton = document.getElementById('cfaq-popup-close');
        const sendButton = document.getElementById('cfaq-popup-send');
        const inputField = document.getElementById('cfaq-popup-input');
        const messagesContainer = document.getElementById('cfaq-popup-messages');
        
        if (!popupButton || !popupWindow) {
            return;
        }
        
        // Open popup
        popupButton.addEventListener('click', function() {
            popupWindow.classList.add('cfaq-popup-open');
            popupButton.classList.add('cfaq-popup-button-hidden');
            inputField.focus();
        });
        
        // Close popup
        closeButton.addEventListener('click', function() {
            popupWindow.classList.remove('cfaq-popup-open');
            popupButton.classList.remove('cfaq-popup-button-hidden');
        });
        
        // Send message on button click
        sendButton.addEventListener('click', function() {
            const message = inputField.value;
            handleUserMessage(message, messagesContainer, inputField);
        });
        
        // Send message on Enter key
        inputField.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const message = inputField.value;
                handleUserMessage(message, messagesContainer, inputField);
            }
        });
        
        // Handle FAQ button clicks
        const faqButtons = popupWindow.querySelectorAll('.cfaq-faq-btn');
        faqButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const question = this.getAttribute('data-question');
                if (question) {
                    inputField.value = question;
                    handleUserMessage(question, messagesContainer, inputField);
                }
            });
        });
    }
    
    /**
     * Initialize Fullscreen Chatbot
     */
    function initFullscreenChatbot() {
        const sendButton = document.getElementById('cfaq-fullscreen-send');
        const inputField = document.getElementById('cfaq-fullscreen-input');
        const messagesContainer = document.getElementById('cfaq-fullscreen-messages');
        
        if (!sendButton || !inputField || !messagesContainer) {
            return;
        }
        
        // Send message on button click
        sendButton.addEventListener('click', function() {
            const message = inputField.value;
            handleUserMessage(message, messagesContainer, inputField);
        });
        
        // Send message on Enter key
        inputField.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const message = inputField.value;
                handleUserMessage(message, messagesContainer, inputField);
            }
        });
    }
    
    /**
     * Initialize chatbot when DOM is ready
     */
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                initPopupChatbot();
                initFullscreenChatbot();
            });
        } else {
            initPopupChatbot();
            initFullscreenChatbot();
        }
    }
    
    // Start initialization
    init();
    
})();