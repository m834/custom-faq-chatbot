<?php
/**
 * Plugin Name: Custom FAQ Chatbot
 * Plugin URI:  https://example.com/
 * Description: Lightweight FAQ Chatbot plugin that adds a popup and fullscreen FAQ chatbot.
 * Version:     1.0.0
 * Author:      m834
 * Text Domain: custom-faq-chatbot
 */

if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('CFAQ_VERSION', '1.0.0');
define('CFAQ_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('CFAQ_PLUGIN_URL', plugin_dir_url(__FILE__));

/**
 * Main Plugin Class
 */
class Custom_FAQ_Chatbot {
    
    /**
     * Constructor
     */
    public function __construct() {
        // Enqueue scripts and styles
        add_action('wp_enqueue_scripts', array($this, 'enqueue_assets'));
        
        // Register shortcode
        add_shortcode('chatbot_fullscreen', array($this, 'render_fullscreen_chatbot'));
        
        // Add popup chatbot to footer
        add_action('wp_footer', array($this, 'render_popup_chatbot'));
        
        // AJAX handler for saving unanswered questions
        add_action('wp_ajax_cfaq_save_unanswered', array($this, 'save_unanswered_question'));
        add_action('wp_ajax_nopriv_cfaq_save_unanswered', array($this, 'save_unanswered_question'));
        
        // Register notification shortcode
        add_shortcode('admissions_notification', array($this, 'render_admissions_notification'));
    }
    
    /**
     * Enqueue CSS and JavaScript files
     */
    public function enqueue_assets() {
        // Enqueue CSS
        wp_enqueue_style(
            'cfaq-chatbot-style',
            CFAQ_PLUGIN_URL . 'assets/style.css',
            array(),
            CFAQ_VERSION
        );
        
        // Enqueue QnA Data
        wp_enqueue_script(
            'cfaq-qna-data',
            CFAQ_PLUGIN_URL . 'assets/qna-data.js',
            array(),
            CFAQ_VERSION,
            true
        );
        
        // Enqueue Main Chatbot JS
        wp_enqueue_script(
            'cfaq-chatbot-js',
            CFAQ_PLUGIN_URL . 'assets/chatbot.js',
            array('cfaq-qna-data'),
            CFAQ_VERSION,
            true
        );
        
        // Enqueue Notification Popup JS
        wp_enqueue_script(
            'cfaq-notification-popup-js',
            CFAQ_PLUGIN_URL . 'assets/notification-popup.js',
            array(),
            CFAQ_VERSION,
            true
        );
                // Localize script for AJAX
        wp_localize_script(
            'cfaq-chatbot-js',
            'cfaqAjax',
            array(
                'ajaxurl' => admin_url('admin-ajax.php'),
                'nonce' => wp_create_nonce('cfaq_save_nonce')
            )
        );
    }
    
    /**
     * Render fullscreen chatbot via shortcode
     */
    public function render_fullscreen_chatbot($atts) {
        ob_start();
        ?>
        <div class="cfaq-fullscreen-container">
            <div class="cfaq-chat-header">
                <h3>FAQ Chatbot</h3>
                <p>Ask me anything!</p>
            </div>
            <div class="cfaq-chat-messages" id="cfaq-fullscreen-messages">
                <div class="cfaq-message cfaq-bot-message">
                    <div class="cfaq-message-content">
                        Hello! I'm here to help answer your questions. How can I assist you today?
                    </div>
                </div>
            </div>
            <div class="cfaq-chat-input-container">
                <input 
                    type="text" 
                    id="cfaq-fullscreen-input" 
                    class="cfaq-chat-input" 
                    placeholder="Type your question here..."
                    autocomplete="off"
                />
                <button id="cfaq-fullscreen-send" class="cfaq-send-button">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M2 10L18 2L10 18L8 11L2 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }
    
    /**
     * Save unanswered question to JSON file
     */
    public function save_unanswered_question() {
        // Log the request
        error_log('CFAQ: save_unanswered_question called');
        
        // Verify nonce
        if (!check_ajax_referer('cfaq_save_nonce', 'nonce', false)) {
            error_log('CFAQ: Nonce verification failed');
            wp_send_json_error('Security check failed');
            return;
        }
        
        // Get the question from POST data
        $question = isset($_POST['question']) ? sanitize_text_field($_POST['question']) : '';
        
        error_log('CFAQ: Question received: ' . $question);
        
        if (empty($question)) {
            error_log('CFAQ: Empty question provided');
            wp_send_json_error('No question provided');
            return;
        }
        
        // Use plugin's assets directory
        $cfaq_dir = CFAQ_PLUGIN_DIR . 'assets';
        
        error_log('CFAQ: Using assets directory: ' . $cfaq_dir);
        
        // Check if directory exists
        if (!file_exists($cfaq_dir)) {
            error_log('CFAQ: Assets directory does not exist: ' . $cfaq_dir);
            wp_send_json_error('Assets directory not found');
            return;
        }
        
        // Check if directory is writable
        if (!is_writable($cfaq_dir)) {
            error_log('CFAQ: Assets directory not writable: ' . $cfaq_dir);
            // Try to make it writable
            @chmod($cfaq_dir, 0755);
            if (!is_writable($cfaq_dir)) {
                wp_send_json_error('Assets directory is not writable. Please check folder permissions.');
                return;
            }
        }
        
        // Path to unanswered questions file in assets folder
        $file_path = $cfaq_dir . '/unanswered-questions.json';
        
        error_log('CFAQ: File path: ' . $file_path);
        
        // Load existing data or create new array
        $questions = array();
        if (file_exists($file_path)) {
            $json_content = file_get_contents($file_path);
            if ($json_content !== false) {
                $questions = json_decode($json_content, true);
                if (!is_array($questions)) {
                    $questions = array();
                }
                error_log('CFAQ: Loaded ' . count($questions) . ' existing questions');
            }
        } else {
            error_log('CFAQ: Creating new questions file');
        }
        
        // Add new question with date
        $new_question = array(
            'id' => count($questions) + 1,
            'question' => $question,
            'date' => current_time('mysql'),
            'timestamp' => current_time('timestamp'),
            'user_agent' => isset($_SERVER['HTTP_USER_AGENT']) ? sanitize_text_field($_SERVER['HTTP_USER_AGENT']) : 'Unknown'
        );
        
        $questions[] = $new_question;
        
        // Save to file with error suppression to catch issues
        $json_data = json_encode($questions, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
        $result = @file_put_contents($file_path, $json_data);
        
        if ($result !== false) {
            error_log('CFAQ: Question saved successfully. Total questions: ' . count($questions));
            // Set file permissions
            @chmod($file_path, 0644);
            wp_send_json_success(array(
                'message' => 'Question saved successfully',
                'total' => count($questions),
                'file_path' => $file_path
            ));
        } else {
            $error = error_get_last();
            error_log('CFAQ: Failed to save question. Error: ' . print_r($error, true));
            wp_send_json_error('Failed to save question to file. Check file permissions.');
        }
    }
    
    /**
     * Render popup chatbot in footer
     */
    public function render_popup_chatbot() {
        ?>
        <!-- Popup Chat Button with Pointing Message -->
        <div class="cfaq-button-container">
            <div class="cfaq-pointing-message">
                <span>Need help? Click me! 👋</span>
                <div class="cfaq-pointer-arrow"></div>
            </div>
            <div id="cfaq-popup-button" class="cfaq-popup-button">
                <img src="<?php echo CFAQ_PLUGIN_URL; ?>assets/icon.png" alt="Chat" width="24" height="24" />
            </div>
        </div>
        
        <!-- Popup Chat Window -->
        <div id="cfaq-popup-window" class="cfaq-popup-window">
            <div class="cfaq-popup-header">
                <div class="cfaq-popup-title">
                    <h4>FAQ Chatbot</h4>
                    <p>Ask me anything</p>
                </div>
                <button id="cfaq-popup-close" class="cfaq-close-button">
                    <img src="<?php echo CFAQ_PLUGIN_URL; ?>assets/logo.png" alt="Close" width="20" height="20" />
                </button>
            </div>
            <div class="cfaq-popup-messages" id="cfaq-popup-messages">
                <div class="cfaq-message cfaq-bot-message">
                    <div class="cfaq-message-content">
                        Hello! I'm here to help answer your questions. How can I assist you today?
                    </div>
                </div>
                <div class="cfaq-message cfaq-bot-message">
                    <div class="cfaq-message-content">
                        <strong>📌 Frequently Asked Questions:</strong>
                        <div class="cfaq-faq-list">
                            <button class="cfaq-faq-btn" data-question="What is DigiBizz?">1. What is DigiBizz?</button>
                            <button class="cfaq-faq-btn" data-question="What courses are offered?">2. What courses are offered?</button>
                            <button class="cfaq-faq-btn" data-question="How do I register?">3. How do I register?</button>
                            <button class="cfaq-faq-btn" data-question="What is the eligibility criteria?">4. What is the eligibility criteria?</button>
                            <button class="cfaq-faq-btn" data-question="Is there any fee?">5. Is there any fee?</button>
                            <button class="cfaq-faq-btn" data-question="What is the stipend amount?">6. What is the stipend amount?</button>
                            <button class="cfaq-faq-btn" data-question="How long is the training?">7. How long is the training?</button>
                            <button class="cfaq-faq-btn" data-question="Will I get a certificate?">8. Will I get a certificate?</button>
                            <button class="cfaq-faq-btn" data-question="Where are the training centers?">9. Where are the training centers?</button>
                            <button class="cfaq-faq-btn" data-question="How can I contact support?">10. How can I contact support?</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cfaq-popup-input-container">
                <input 
                    type="text" 
                    id="cfaq-popup-input" 
                    class="cfaq-chat-input" 
                    placeholder="Type your question..."
                    autocomplete="off"
                />
                <button id="cfaq-popup-send" class="cfaq-send-button">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <path d="M2 10L18 2L10 18L8 11L2 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
        <?php
    }
    
    /**
     * Render admissions notification popup via shortcode
     */
    public function render_admissions_notification($atts) {
        ob_start();
        ?>
        <!-- Admissions Notification Popup -->
        <div id="cfaq-notification-popup" class="cfaq-notification-popup">
            <div class="cfaq-notification-overlay"></div>
            <div class="cfaq-notification-content">
                <button id="cfaq-notification-close" class="cfaq-notification-close">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                
                <div class="cfaq-notification-header">
                    <div class="cfaq-notification-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </div>
                    <h2>Exciting Opportunity!</h2>
                </div>
                
                <div class="cfaq-notification-body">
                    <p>Join our amazing program and grow your skills. Applications are now open!</p>
                    <div class="cfaq-highlights">
                        <span class="cfaq-highlight">✓ Free Training</span>
                        <span class="cfaq-highlight">✓ Certification</span>
                        <span class="cfaq-highlight">✓ Job Placement</span>
                    </div>
                </div>
                
                <div class="cfaq-notification-footer">
                    <button id="cfaq-notification-close-btn" class="cfaq-notification-btn cfaq-btn-secondary">
                        Close
                    </button>
                    <button id="cfaq-notification-apply-btn" class="cfaq-notification-btn cfaq-btn-primary">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }
}

// Initialize the plugin
new Custom_FAQ_Chatbot();