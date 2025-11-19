<?php

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
     * Render popup chatbot in footer
     */
    public function render_popup_chatbot() {
        ?>
        <!-- Popup Chat Button -->
        <div id="cfaq-popup-button" class="cfaq-popup-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        
        <!-- Popup Chat Window -->
        <div id="cfaq-popup-window" class="cfaq-popup-window">
            <div class="cfaq-popup-header">
                <div class="cfaq-popup-title">
                    <h4>FAQ Chatbot</h4>
                    <p>Ask me anything</p>
                </div>
                <button id="cfaq-popup-close" class="cfaq-close-button">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
            <div class="cfaq-popup-messages" id="cfaq-popup-messages">
                <div class="cfaq-message cfaq-bot-message">
                    <div class="cfaq-message-content">
                        Hello! I'm here to help answer your questions. How can I assist you today?
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
}

// Initialize the plugin
new Custom_FAQ_Chatbot();