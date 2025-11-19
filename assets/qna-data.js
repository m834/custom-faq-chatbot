const cfaqData = [
    // ==========================================
    // GREETINGS & BASIC INTERACTIONS
    // ==========================================
    {
        keywords: ["hello", "hi", "hey", "greetings", "assalam", "salam"],
        answer: "السلام علیکم! Welcome to DigiBizz - Balochistan's First Mega Employment Program. I'm here to help answer your questions about our freelancing training program. How can I assist you today?"
    },
    {
        keywords: ["how are you", "kya haal", "kaisay hain"],
        answer: "I'm doing great, Alhamdulillah! I'm here to provide you with complete information about DigiBizz. What would you like to know about our free freelancing program?"
    },
    {
        keywords: ["thank", "thanks", "appreciate", "shukriya", "mehrbani"],
        answer: "You're very welcome! جزاک اللہ! Feel free to ask if you have any more questions about DigiBizz. We're here to help you start your freelancing journey."
    },
    {
        keywords: ["bye", "goodbye", "khuda hafiz", "allah hafiz"],
        answer: "خدا حافظ! Best of luck with your freelancing journey. Visit digibizz.gob.pk or call 081-9203131 for more information. May you achieve great success!"
    },

    // ==========================================
    // ABOUT DIGIBIZZ PROGRAM
    // ==========================================
    {
        keywords: ["what is digibizz", "about digibizz", "tell me about", "digibizz kya hai"],
        answer: "DigiBizz is Balochistan's first flagship freelancing program launched by the Science & IT Department, Government of Balochistan. It's a completely FREE training program that equips youth with essential digital skills in Digital Marketing, Creative Design, and Amazon E-commerce. The program was created to help young people earn online, support their families, and secure a brighter future."
    },
    {
        keywords: ["goal", "mission", "purpose", "aim", "objective", "vision"],
        answer: "The goal of DigiBizz is to build a strong, skilled, and self-reliant generation in Balochistan by providing free, high-quality freelancing education. We aim to train 2,000+ young men and women across the province in practical digital skills so they can earn in dollars, support their families, and help grow Balochistan's economy."
    },
    {
        keywords: ["why digibizz", "importance", "benefit", "why join"],
        answer: "DigiBizz provides world-class freelancing training that was never available before in Balochistan. Benefits include: ✅ Completely FREE training, ✅ Monthly stipend of Rs. 1,575, ✅ World-class trainers, ✅ Earn in dollars from home, ✅ Government-backed certificate, ✅ Practical hands-on learning, ✅ Access to global opportunities, ✅ No experience required!"
    },
    {
        keywords: ["government", "who runs", "organizer", "department", "science it"],
        answer: "DigiBizz is organized by the Science & IT Department, Government of Balochistan, executed in consultation with Punjab Information Technology Board. It's an official government initiative under the flagship freelancing project aimed at youth empowerment and economic development."
    },
    {
        keywords: ["when started", "launch", "inauguration", "history"],
        answer: "DigiBizz was launched as the first flagship freelancing project of the Government of Balochistan. The program has successfully completed multiple batches (Batch 01 through Batch 07 and beyond), training hundreds of students across various districts of Balochistan."
    },
    {
        keywords: ["mega employment", "employment program", "job program"],
        answer: "Yes! DigiBizz is officially titled 'Balochistan's First Mega Employment Program.' It's a pioneer initiative aimed at equipping the youth of Balochistan with essential digital skills to earn through freelancing, reducing unemployment and creating self-employment opportunities."
    },

    // ==========================================
    // COURSES & TRAINING DETAILS
    // ==========================================
    {
        keywords: ["courses", "what courses", "training", "what learn", "subjects", "course konsi hain"],
        answer: "DigiBizz offers 3 highly demanded market courses: 1️⃣ Digital Marketing & Advertising (Content Marketing & Advertisement), 2️⃣ Creative Design (Graphics Design), 3️⃣ Amazon E-commerce & Web (AWE). Each course includes comprehensive freelancing training to help you start earning online immediately after graduation."
    },
    {
        keywords: ["digital marketing", "marketing course", "content marketing", "advertising"],
        answer: "The Digital Marketing & Advertising course covers: ✓ Content Marketing strategies, ✓ Online Advertisement campaigns, ✓ Social Media Marketing (Facebook, Instagram, LinkedIn), ✓ Search Engine Optimization (SEO), ✓ Email Marketing, ✓ Google Ads & Facebook Ads, ✓ Analytics & Reporting, ✓ Client acquisition on Upwork/Fiverr. You'll learn to help businesses grow online and earn as a digital marketer."
    },
    {
        keywords: ["creative design", "graphics", "designing", "graphic design", "creative course"],
        answer: "The Creative Design course teaches: ✓ Graphic Design fundamentals, ✓ Logo Design & Branding, ✓ Social Media Graphics, ✓ Print Design (Brochures, Flyers), ✓ Adobe Photoshop & Illustrator, ✓ Typography & Color Theory, ✓ Portfolio building, ✓ Freelancing on design platforms. You'll create professional designs and offer services to international clients."
    },
    {
        keywords: ["amazon", "e-commerce", "awe", "online store", "amazon course", "web ecommerce"],
        answer: "The Amazon E-commerce & Web (AWE) course covers: ✓ Amazon FBA (Fulfillment by Amazon), ✓ Product Research & Selection, ✓ Listing Optimization & Keywords, ✓ Complete Dropshipping Store Setup, ✓ Store Management & Operations, ✓ Amazon Seller Central, ✓ Inventory Management, ✓ Customer Service. You'll learn to build profitable online businesses on Amazon marketplace."
    },
    {
        keywords: ["wordpress", "web", "website development", "web design"],
        answer: "WordPress development is covered in the Amazon E-commerce & Web course, including: ✓ WordPress installation & setup, ✓ Theme customization, ✓ Dynamic web content creation, ✓ CSS basics for styling, ✓ Hosting & Control Panel management, ✓ PSD to WordPress conversion, ✓ E-commerce integration. This prepares you for web development freelancing."
    },
    {
        keywords: ["freelancing basics", "freelance training", "how to freelance", "freelancing sikhen"],
        answer: "ALL three courses include complete freelancing fundamentals: ✓ Creating profiles on Upwork, Fiverr, Freelancer.com, ✓ Portfolio building & showcasing work, ✓ Writing winning proposals, ✓ Pricing strategies & packages, ✓ Client communication & management, ✓ Payment methods & withdrawals, ✓ Building long-term client relationships, ✓ Time management for freelancers."
    },
    {
        keywords: ["duration", "how long", "course length", "training period", "kitna time"],
        answer: "The training program consists of 50 lectures delivered over several months. The exact duration varies by batch but typically runs for 3-6 months with regular classes. This comprehensive timeline ensures thorough learning, practical assignments, and hands-on experience to make you job-ready."
    },
    {
        keywords: ["schedule", "timing", "class time", "when classes", "timing kya hai"],
        answer: "Class schedules vary by training center and batch. After registration, shortlisting, and final selection, you'll receive detailed schedule information via email and through official communication channels. Check the LMS portal at lms.digibizz.gob.pk or contact your assigned training center for specific timings."
    },
    {
        keywords: ["certificate", "certification", "degree", "sanad"],
        answer: "Yes! Upon successfully completing all 50 lectures, assignments, and assessments, you'll receive an official training completion certificate from DigiBizz, Science & IT Department, Government of Balochistan. Your certificate reflects your formal performance evaluation, rating, and demonstrates your acquired skills to potential clients."
    },
    {
        keywords: ["syllabus", "course outline", "curriculum", "what topics"],
        answer: "Each course has a comprehensive 50-lecture curriculum. For detailed syllabus and helping materials, visit the 'Courses Helping Material' section on digibizz.gob.pk. The curriculum is designed by industry experts to cover theoretical knowledge, practical skills, real-world projects, and freelancing strategies."
    },

    // ==========================================
    // ELIGIBILITY & REGISTRATION
    // ==========================================
    {
        keywords: ["eligible", "eligibility", "who can apply", "requirements", "criteria", "kaun apply kar sakta"],
        answer: "Eligibility Criteria: ✅ Must be a Balochistan resident with valid domicile, ✅ Completed at least 12 years of education (Intermediate/F.Sc or equivalent), ✅ Must be unemployed, ✅ Both males and females from across the province can apply. Meeting these criteria is mandatory for consideration."
    },
    {
        keywords: ["age limit", "age", "minimum age", "maximum age", "umar ki had"],
        answer: "The primary eligibility requirements focus on education level (12 years minimum) and domicile (Balochistan). For specific age limits or age-related queries, please contact the DigiBizz office at support@digibizz.gob.pk or call 081-9203131 for clarification."
    },
    {
        keywords: ["register", "registration", "how to apply", "apply", "admission", "kaise apply karen"],
        answer: "Registration Process: Step 1: Visit portal.digibizz.gob.pk when registrations open. Step 2: Fill the online application form with correct details (contact info, valid CNIC, city, preferred center). Step 3: Submit required documents. Step 4: Complete assessment tests. Step 5: Wait for selection notification via email. ⚠️ IMPORTANT: Provide correct email as all communication happens via email!"
    },
    {
        keywords: ["when registration", "admission open", "next batch", "registration date", "kab khulegi"],
        answer: "Registration dates for new batches are announced on the official website (digibizz.gob.pk) and DigiBizz Balochistan Facebook page. Follow our social media and keep checking the website regularly. You can also WhatsApp or call 081-9203131 to inquire about upcoming batch announcements."
    },
    {
        keywords: ["selection", "selection process", "how selected", "shortlist", "kaise select honge"],
        answer: "Selection Process: 1️⃣ Complete online application, 2️⃣ Submit all required documents, 3️⃣ Complete a series of assessments (online tests), 4️⃣ Candidates are evaluated based on assessment results and fit with program goals, 5️⃣ Selected candidates receive email notification with orientation details. ⚠️ Final selection is merit-based and cannot be challenged at any level."
    },
    {
        keywords: ["documents", "required documents", "kya documents chahiye", "paperwork"],
        answer: "Required documents typically include: ✓ Valid CNIC (Computerized National Identity Card), ✓ Domicile certificate (Balochistan), ✓ Educational certificates (Intermediate/F.Sc or above), ✓ Recent photographs. Exact document requirements will be specified in the application form. Keep digital copies ready for online submission."
    },
    {
        keywords: ["domicile", "balochistan local", "non-local", "domicile mandatory"],
        answer: "Yes, having Balochistan domicile is MANDATORY. The program is specifically designed for the youth of Balochistan to empower them with digital skills and freelancing opportunities. Only Balochistan residents with valid domicile certificates can apply."
    },
    {
        keywords: ["education requirement", "intermediate", "graduate", "matric", "fa fsc"],
        answer: "You must have completed at least 12 years of education (Intermediate/F.Sc/FA level or equivalent). This means Matric (10 years) alone is NOT sufficient. Both undergraduate students and graduates can apply. Your educational certificates will be verified during the application process."
    },
    {
        keywords: ["employed", "job", "working", "can i apply if working", "naukri hai"],
        answer: "NO. The program specifically requires applicants to be unemployed. One of the core eligibility criteria is unemployment status. If you're currently employed, you do not qualify for this program. The program is designed to provide employment opportunities to jobless youth."
    },
    {
        keywords: ["test", "assessment", "exam", "interview", "entry test"],
        answer: "Yes, the selection process includes a series of assessments (online tests) to evaluate your aptitude and fit for the program. These assessments help ensure that selected candidates can benefit maximum from the training. Prepare well and be honest in your responses."
    },

    // ==========================================
    // TRAINING CENTERS & LOCATIONS
    // ==========================================
    {
        keywords: ["location", "training center", "where", "address", "centers", "kahan hai"],
        answer: "Main Office: IT Training Institute, Old Pishin Stop, Near TCS Office, Model Town, Quetta. Training Centers: ✓ University of Balochistan (UOB), ✓ BUITEMS (Balochistan University of IT, Engineering & Management Sciences), ✓ IITI Model Town Quetta, ✓ Government Girls College Quetta. More centers are being established across the province!"
    },
    {
        keywords: ["quetta", "training in quetta", "quetta center"],
        answer: "Yes! DigiBizz has multiple training centers in Quetta: 1) University of Balochistan (UOB), 2) BUITEMS, 3) IITI Model Town, 4) Government Girls College, 5) Main Office at Model Town B-18. Quetta residents can select their preferred center during registration based on availability."
    },
    {
        keywords: ["other cities", "outside quetta", "districts", "gwadar", "turbat", "doosray shaher"],
        answer: "DigiBizz has conducted successful awareness and mobilization sessions in multiple districts including: Awaran, Sibi, Zhob, Loralai, Dera Bugti, Gwadar, and Turbat. The program is expanding to establish 20 training centers across major districts of Balochistan. Follow updates for centers in your area!"
    },
    {
        keywords: ["uob", "university of balochistan", "balochistan university"],
        answer: "Yes! University of Balochistan (UOB) is one of the main and most active training centers for DigiBizz. Multiple batches including Batch 07 have successfully completed training at UOB with excellent results. UOB students and external candidates can both apply for UOB center."
    },
    {
        keywords: ["buitems", "balochistan university engineering"],
        answer: "Yes! BUITEMS (Balochistan University of Information Technology, Engineering & Management Sciences) is an official DigiBizz training center. It's one of the leading institutions in Quetta where high-quality freelancing training is provided by expert trainers."
    },
    {
        keywords: ["government girls college", "girls college", "female center"],
        answer: "Government Girls College Quetta is one of the training centers with a focus on female students. DigiBizz strongly promotes women empowerment and has dedicated centers to ensure comfortable learning environments for female trainees while maintaining cultural sensitivity."
    },
    {
        keywords: ["iiti", "it training institute", "model town"],
        answer: "IITI (IT Training Institute) Model Town is both the main administrative office and a training center. Located at Old Pishin Stop, Near TCS Office, Model Town, Quetta, it houses the program office and conducts training sessions."
    },
    {
        keywords: ["expansion", "new centers", "more locations", "naye centers"],
        answer: "DigiBizz is actively expanding! The program plans to establish 20 training centers across major districts of Balochistan. Awareness sessions have already been conducted in Awaran, Sibi, Zhob, Loralai, Dera Bugti, Gwadar, and Turbat. Keep following our announcements for new centers!"
    },

    // ==========================================
    // FINANCIAL INFORMATION
    // ==========================================
    {
        keywords: ["fee", "cost", "fees", "price", "charges", "kitna paisa lagega"],
        answer: "DigiBizz training is 100% COMPLETELY FREE of cost! There are absolutely NO fees, NO charges, NO hidden costs. This is a fully funded Government of Balochistan initiative. ⚠️ BEWARE: If anyone asks for money to get you admitted, report them immediately. Apply only through official website!"
    },
    {
        keywords: ["stipend", "allowance", "salary", "payment", "wazifa milega"],
        answer: "YES! DigiBizz provides a monthly stipend of Rs. 1,575 to all enrolled trainees throughout the training period. This stipend helps cover transportation and basic expenses during your training. You receive both FREE world-class training AND a monthly allowance!"
    },
    {
        keywords: ["free", "no cost", "no fee", "bilkul free"],
        answer: "YES, 100% FREE! DigiBizz charges absolutely nothing. You'll receive: ✅ World-class training (FREE), ✅ Learning materials (FREE), ✅ Expert trainers (FREE), ✅ Certificate (FREE), ✅ PLUS monthly stipend of Rs. 1,575. This is a fully government-funded program with no hidden charges whatsoever!"
    },
    {
        keywords: ["how get stipend", "stipend kaise milega", "allowance payment"],
        answer: "The monthly stipend of Rs. 1,575 is provided to all enrolled trainees who maintain required attendance and follow program rules. Payment details and procedures will be communicated by the program administration after your enrollment. Regular attendance is essential to receive stipend."
    },

    // ==========================================
    // ATTENDANCE & PROGRAM RULES
    // ==========================================
    {
        keywords: ["attendance", "presence", "compulsory", "mandatory", "hazri zaruri hai"],
        answer: "⚠️ ATTENDANCE IS MANDATORY! Trainees MUST attend all training sessions. Failure to meet attendance requirements will result in: ❌ Removal from the program, ❌ Blacklisting from all future DigiBizz batches, ❌ Blacklisting from ALL other Government of Balochistan training programs. Take attendance seriously!"
    },
    {
        keywords: ["blacklist", "removal", "expelled", "terminate", "nikal denge"],
        answer: "⚠️ SERIOUS WARNING: Any trainee who fails to meet attendance policy or violates program rules will be BLACKLISTED permanently from: ❌ All future DigiBizz batches, ❌ ALL other training programs by Government of Balochistan. This ensures only serious and committed students benefit. The program can terminate enrollment at any time for rule violations."
    },
    {
        keywords: ["rules", "regulations", "policy", "discipline", "nizam"],
        answer: "Program Rules: ✓ Maintain mandatory attendance, ✓ Complete all assignments on time, ✓ Participate in group discussions & projects, ✓ Demonstrate professional conduct, ✓ Respect trainers and fellow students, ✓ Maintain confidentiality, ✓ Follow all program policies, ✓ No disruptive behavior. Violations lead to immediate removal and blacklisting!"
    },
    {
        keywords: ["assignments", "homework", "projects", "kaam"],
        answer: "YES, completing assignments is MANDATORY! Trainees must: ✓ Complete all program assignments, ✓ Submit work on time, ✓ Participate in group projects, ✓ Engage in discussions. Your assignments contribute to your performance evaluation and final certificate rating. Non-completion can result in removal from the program."
    },
    {
        keywords: ["evaluation", "assessment", "grading", "marks", "performance"],
        answer: "Your performance is formally evaluated based on: ✓ Attendance record, ✓ Assignment completion & quality, ✓ Class participation, ✓ Project work, ✓ Final assessments. Your certificate will reflect your formal performance evaluation and rating. Good performance leads to better recommendations and opportunities."
    },
    {
        keywords: ["professional conduct", "behavior", "discipline", "adab"],
        answer: "Professional Conduct Requirements: ✓ Respectful and courteous communication, ✓ Prompt and regular attendance, ✓ No disruptive behavior, ✓ No conflicts with others, ✓ Follow all program policies, ✓ Don't interrupt trainer during sessions, ✓ Address concerns constructively, ✓ Contact trainers only through official channels, NOT personal numbers!"
    },
    {
        keywords: ["trainer interaction", "teacher contact", "trainer ko contact"],
        answer: "Trainer Interaction Guidelines: ✓ Communicate respectfully, ✓ Don't interrupt during presentations, ✓ No personal discussions or arguments, ✓ Address concerns professionally, ✓ DON'T contact trainers on personal numbers, ✓ Use only official group channels for communication, ✓ Respect their time and boundaries. Inappropriate behavior will not be tolerated!"
    },
    {
        keywords: ["feedback", "complaint", "issue", "shikayat"],
        answer: "Feedback is encouraged but must be: ✓ Constructive and professional, ✓ Respectful in manner, ✓ Submitted through proper channels. Any negative or inappropriate feedback will NOT be tolerated and may result in removal. If you have genuine concerns, address them professionally through proper channels."
    },
    {
        keywords: ["confidentiality", "secret", "privacy", "raaz"],
        answer: "Confidentiality Policy: All information, materials, and content shared during the program are CONFIDENTIAL. You may NOT: ❌ Disclose program materials to third parties, ❌ Share content without written consent, ❌ Violate intellectual property rights. Confidentiality breaches can lead to legal action and removal from program."
    },
    {
        keywords: ["intellectual property", "copyright", "materials"],
        answer: "Trainees must respect intellectual property rights of: ✓ DigiBizz program materials, ✓ Third-party content used in training, ✓ Trainer presentations and resources. Unauthorized sharing, reproduction, or commercial use of program materials is strictly prohibited and can result in legal consequences."
    },

    // ==========================================
    // CAREER & EARNING OPPORTUNITIES
    // ==========================================
    {
        keywords: ["earn", "earning", "income", "make money", "kamana", "paisay kaise banayein"],
        answer: "After DigiBizz training, you can earn online through freelancing platforms like Upwork, Fiverr, Freelancer.com, PeoplePerHour, and others. Successful Pakistani freelancers earn $500 to $5000+ per month in DOLLARS depending on skills, experience, and dedication. Work from home, set your own rates, and serve international clients!"
    },
    {
        keywords: ["job guarantee", "employment guarantee", "pakki naukri milegi"],
        answer: "⚠️ IMPORTANT DISCLAIMER: DigiBizz makes NO guarantees or promises regarding successful freelance accounts, employment, or business opportunities. We provide you with complete skills, training, knowledge, and guidance. Your SUCCESS depends on YOUR dedication, hard work, practice, and continuous effort. The opportunity is there - you must seize it!"
    },
    {
        keywords: ["freelance platforms", "upwork", "fiverr", "kahan kaam milega"],
        answer: "You'll learn to work on popular platforms: ✓ Upwork (largest freelancing platform), ✓ Fiverr (gig-based marketplace), ✓ Freelancer.com (project bidding), ✓ PeoplePerHour (UK-focused), ✓ Guru.com, ✓ Toptal (for experts), ✓ 99designs (for designers). Training covers profile creation, portfolio building, proposal writing, and client communication!"
    },
    {
        keywords: ["work from home", "remote work", "online work", "ghar baithe kaam"],
        answer: "YES! Freelancing offers complete flexibility: ✓ Work from home or anywhere with internet, ✓ Serve clients worldwide, ✓ Earn in dollars ($$$), ✓ Set your own schedule, ✓ No office politics, ✓ Work-life balance, ✓ Scale your earnings, ✓ Build your own business. This is the beauty of freelancing that DigiBizz teaches!"
    },
    {
        keywords: ["success rate", "success stories", "alumni", "kamyabi ki kahani"],
        answer: "Many DigiBizz graduates have successfully launched their freelancing careers and are earning online! Multiple batches (Batch 01-07+) have completed training with excellent results. Follow 'DigiBizz Balochistan' Facebook page for success stories, testimonials, and achievement updates from our alumni community!"
    },
    {
        keywords: ["dollar", "foreign exchange", "international clients", "dollar kamana"],
        answer: "YES! As a freelancer, you'll serve international clients and earn in DOLLARS or other foreign currencies (USD, EUR, GBP, AUD). This brings maximum foreign exchange to Pakistan and helps you earn 10-20x more than local jobs. DigiBizz specifically trains you for the GLOBAL market, not local!"
    },
    {
        keywords: ["how much earn", "kitna kamai", "monthly income", "salary kitni"],
        answer: "Earnings vary based on skill level and dedication: 🔹 Beginners: $100-$500/month, 🔹 Intermediate: $500-$2000/month, 🔹 Experienced: $2000-$5000+/month. Some expert freelancers earn even more! Pakistan's freelance industry generates millions in foreign exchange. With DigiBizz training and your effort, you can achieve excellent earning potential!"
    },
    {
        keywords: ["client", "how find client", "project kaise milega", "client kahan se milega"],
        answer: "Finding clients is taught in the training: ✓ Create compelling profiles on platforms, ✓ Build strong portfolios, ✓ Write winning proposals, ✓ Bid strategically on projects, ✓ Deliver excellent work for reviews, ✓ Ask for referrals, ✓ Network in your niche, ✓ Use social media marketing. Start with small projects, build reputation, then scale!"
    },

    // ==========================================
    // GENDER & INCLUSIVITY
    // ==========================================
    {
        keywords: ["female", "women", "girls", "ladies", "khawateen", "larki"],
        answer: "YES! DigiBizz STRONGLY encourages female participation! 🌟 Women empowerment is a KEY OBJECTIVE. The program has: ✓ Separate female training centers, ✓ Dedicated female batches, ✓ Cultural sensitivity, ✓ Safe learning environment, ✓ Female trainers available. We aim to train equal numbers of young men and women. Ladies, this is YOUR opportunity!"
    },
    {
        keywords: ["male", "men", "boys", "mard", "larka"],
        answer: "YES, male candidates are welcome and encouraged to apply! DigiBizz accepts both males and females from across Balochistan. The program aims to train 2,000+ youth regardless of gender, as long as eligibility criteria are met. All courses are open to male students."
    },
    {
        keywords: ["coeducation", "mixed", "together", "saath mein"],
        answer: "DigiBizz has BOTH mixed and separate training arrangements depending on the center. There are dedicated female-only centers (like Government Girls College) to ensure comfortable learning environments while respecting cultural values. Some centers have mixed sessions. You can express your preference during registration."
    },
    {
        keywords: ["purdah", "hijab", "islamic", "conservative family"],
        answer: "DigiBizz respects cultural and religious values. We have dedicated female-only centers with separate learning environments. Freelancing is perfect for women who observe purdah because you can work entirely from home without compromising your values. Earn with dignity and respect!"
    },
    {
        keywords: ["women empowerment", "female opportunity", "gender equality"],
        answer: "DigiBizz is committed to women empowerment, gender balance, and reduced inequality - aligned with UN Sustainable Development Goals. The program specifically targets equal participation of men and women, providing economic opportunities that lead to financial independence, family support, and social upliftment."
    },

    // ==========================================
    // TECHNICAL REQUIREMENTS
    // ==========================================
    {
        keywords: ["laptop", "computer", "system requirement", "laptop zaruri hai"],
        answer: "For most courses, you'll need access to a computer or laptop for practice and assignments. Training centers have equipped computer labs for classroom sessions. For practicing at home and future freelancing work, having your own laptop/computer is highly recommended. Specific system requirements will be shared after selection."
    },
    {
        keywords: ["internet", "wifi", "connection", "internet zaruri hai"],
        answer: "Yes, internet access is ESSENTIAL for: ✓ Practicing skills, ✓ Completing assignments, ✓ Accessing online resources, ✓ Future freelancing work. Training centers provide internet facilities during classes. However, you'll need home internet access to practice effectively and eventually work as a freelancer. Mobile internet can work initially."
    },
    {
        keywords: ["software", "tools", "applications", "programs"],
        answer: "Required software depends on your course: 🎨 Creative Design: Adobe Photoshop, Illustrator, Canva. 📱 Digital Marketing: Various online tools (provided in training). 🛒 Amazon E-commerce: Browser-based tools, WordPress. Training includes guidance on installing and using these tools. Some are free, others have student discounts."
    },
    {
        keywords: ["mobile", "smartphone", "phone se kar sakte", "mobile se work"],
        answer: "While you can do SOME freelancing tasks on smartphone (communication, checking messages), professional work requires a computer/laptop, especially for: ✓ Graphics design, ✓ Web development, ✓ Professional marketing campaigns. Start your training journey with access to a computer - it's essential for quality work."
    },
    {
        keywords: ["specifications", "system specs", "computer requirements"],
        answer: "Basic recommended specifications: ✓ Processor: Intel i3 or higher, ✓ RAM: 4GB minimum (8GB recommended), ✓ Storage: 256GB minimum, ✓ OS: Windows 10/11 or Mac OS, ✓ Stable internet connection. Exact requirements vary by course and will be communicated after selection."
    },

    // ==========================================
    // CONTACT INFORMATION
    // ==========================================
    {
        keywords: ["contact", "phone", "call", "number", "rabta", "contact kaise karen"],
        answer: "📞 Contact DigiBizz: Phone: 081-9203131, Email: support@digibizz.gob.pk, Address: IT Training Institute, Old Pishin Stop, Near TCS Office, Model Town, Quetta, Pakistan. Office Location: Model Town B-18, Old AG Office, Quetta. We're here to help with all your queries!"
    },
    {
        keywords: ["email", "mail address", "email kya hai"],
        answer: "📧 Official Email: support@digibizz.gob.pk - Use this email for all queries related to registration, courses, eligibility, selection, and program information. Response time is usually within 24-48 hours on working days."
    },
    {
        keywords: ["website", "portal", "online", "website kya hai"],
        answer: "🌐 Official Websites: Main Website: www.digibizz.gob.pk | LMS Portal: lms.digibizz.gob.pk | Registration Portal: portal.digibizz.gob.pk | Follow us on Facebook: Search 'DigiBizz Balochistan' for latest updates, announcements, and success stories!"
    },
    {
        keywords: ["facebook", "social media", "fb", "facebook page"],
        answer: "📱 Follow us on Facebook: Search for 'DigiBizz Balochistan' official page for: ✓ Latest batch announcements, ✓ Registration opening dates, ✓ Success stories and testimonials, ✓ Program updates and news, ✓ Event photos and videos, ✓ Important notifications. Stay connected for timely updates!"
    },
    {
        keywords: ["visit office", "can i visit", "physical office", "office jana hai"],
        answer: "Yes! You can visit our office at: IT Training Institute, Old Pishin Stop, Near TCS Office, Model Town, Quetta (also known as Model Town B-18, Old AG Office). However, it's recommended to call first at 081-9203131 or email support@digibizz.gob.pk to confirm office hours and availability."
    },
    {
        keywords: ["whatsapp", "whatsapp number", "whatsapp pe contact"],
        answer: "You can contact us via phone/WhatsApp at 081-9203131 for quick queries. For detailed information and official communication, email support@digibizz.gob.pk is preferred as it provides written documentation of your inquiry."
    },

    // ==========================================
    // PROGRAM STATISTICS & IMPACT
    // ==========================================
    {
        keywords: ["how many students", "total students", "capacity", "kitne students"],
        answer: "DigiBizz aims to train 2,000+ young men and women across Balochistan. Multiple batches have been successfully completed with hundreds of students trained so far across different training centers. The program continues to expand its reach to more districts and train more youth!"
    },
    {
        keywords: ["batch", "current batch", "batch number", "konsi batch chal rahi"],
        answer: "DigiBizz has successfully completed multiple batches: Batch 01, 02, 03, 04, 05, 06, 07, and continues with new batches. Each batch has hundreds of students across multiple centers. Check digibizz.gob.pk or Facebook page for current batch information and upcoming batch announcements."
    },
    {
        keywords: ["pakistan ranking", "freelancing rank", "pakistan position"],
        answer: "🏆 Pakistan is globally ranked as the 4th most popular country for freelancing! This shows massive potential and opportunities. DigiBizz prepares you to be part of this thriving freelancing community, contributing to Pakistan's growing digital economy and earning foreign exchange!"
    },
    {
        keywords: ["sdg", "sustainable development", "united nations", "un goals"],
        answer: "DigiBizz is aligned with United Nations Sustainable Development Goals (SDGs): 🎯 SDG 1: No Poverty (income generation), 🎯 SDG 4: Quality Education (skill development), 🎯 SDG 5: Gender Equality (women empowerment), 🎯 SDG 8: Decent Work & Economic Growth, 🎯 SDG 10: Reduced Inequalities (equal opportunity)."
    },
    {
        keywords: ["awareness session", "mobilization", "seminar", "event"],
        answer: "The Program Director has successfully conducted awareness and mobilization sessions across Balochistan in districts including: Awaran, Sibi, Zhob, Loralai, Dera Bugti, Gwadar, Turbat, and at leading institutions in Quetta (BUITEMS, UOB, Government Girls College). These sessions have been instrumental in mobilizing youth and enhancing awareness of digital opportunities."
    },
    {
        keywords: ["digital globalization", "digital economy", "digital skills importance"],
        answer: "Through DigiBizz, Balochistan's youth is being mobilized for digital globalization. The initiative fosters stronger understanding of the digital economy and its potential, encouraging young people to actively engage with and contribute to the global digital era. This is building a digitally empowered generation in Balochistan!"
    },

    // ==========================================
    // COURSE COMPARISON & SELECTION
    // ==========================================
    {
        keywords: ["which course", "best course", "course selection", "recommend course", "konsa course lu"],
        answer: "All three courses have EXCELLENT earning potential! Choose based on YOUR interest: 🎨 Creative Design - If you're creative, artistic, love designing, 📱 Digital Marketing - If you like business, marketing, helping brands grow, 🛒 Amazon E-commerce - If you want to build online businesses and stores. Follow your passion for best results!"
    },
    {
        keywords: ["can i take multiple", "two courses", "change course", "do courses"],
        answer: "Typically, you choose ONE specialization per batch to ensure focused learning. Taking multiple courses simultaneously may not be possible due to time constraints. For specific questions about multiple courses or changing courses after selection, contact support@digibizz.gob.pk for guidance."
    },
    {
        keywords: ["beginner", "no experience", "never freelanced", "kuch nahi ata"],
        answer: "PERFECT! DigiBizz is designed specifically for BEGINNERS with ZERO prior experience! 🎓 We start from scratch and take you to professional level, 🎓 No technical knowledge needed beforehand, 🎓 Step-by-step learning, 🎓 Expert trainers guide you throughout. If you can use a computer, you can learn freelancing with us!"
    },
    {
        keywords: ["difficult course", "easy course", "hard to learn", "mushkil hai"],
        answer: "No course is inherently difficult! Your success depends on: ✓ Your interest and passion, ✓ Consistent practice, ✓ Regular attendance, ✓ Dedication and effort. Creative Design requires artistic sense, Digital Marketing needs analytical thinking, E-commerce requires business mindset. Choose what matches YOUR strengths and interests!"
    },

    // ==========================================
    // SPECIAL CASES & SPECIFIC QUERIES
    // ==========================================
    {
        keywords: ["disability", "disabled", "special needs", "معذور"],
        answer: "DigiBizz welcomes applications from ALL eligible candidates including persons with disabilities. Freelancing is particularly suitable for those with mobility challenges as you can work from home. For specific accommodations or questions regarding special needs support, contact support@digibizz.gob.pk or call 081-9203131."
    },
    {
        keywords: ["married", "family", "can married apply", "shadi shuda"],
        answer: "YES! As long as you meet eligibility criteria (Balochistan domicile, 12 years education, unemployed), marital status doesn't matter. Freelancing is PERFECT for married individuals and parents because: ✓ Work from home flexibility, ✓ Manage family responsibilities, ✓ Earn while caring for family, ✓ No office commute."
    },
    {
        keywords: ["previous batch", "reapply", "apply again", "phir se apply"],
        answer: "If you applied before but weren't selected, you CAN reapply for new batches - provided you weren't blacklisted for policy violations. If you were removed from a previous batch due to attendance or rule violations, you are permanently blacklisted. Otherwise, keep trying with improved application!"
    },
    {
        keywords: ["english", "language", "urdu", "angrezi zaruri hai"],
        answer: "Training is conducted in BOTH Urdu and English for clear understanding. Basic English knowledge is helpful because: ✓ Most clients are international, ✓ Platform interfaces are in English, ✓ Professional communication requires English. However, we guide you through language aspects. If you can read/write basic English, you'll manage well!"
    },
    {
        keywords: ["age gap", "study break", "gap after education", "farig"],
        answer: "Having a gap after your education is generally acceptable as long as you meet eligibility criteria. What matters is: ✓ You have 12 years education, ✓ Balochistan domicile, ✓ Currently unemployed, ✓ Willing to learn. The gap doesn't disqualify you if you meet basic requirements."
    },
    {
        keywords: ["part time", "part time student", "doing bachelors", "study kar raha"],
        answer: "If you're a current student pursuing further education (Bachelors, Masters), you can still apply as long as you're unemployed and can commit to attending ALL training sessions. However, ensure your class schedule doesn't conflict with DigiBizz training timings. Time management is crucial!"
    },

    // ==========================================
    // MISCONCEPTIONS & CLARIFICATIONS  
    // ==========================================
    {
        keywords: ["scam", "fake", "real", "genuine", "legit", "dhoka", "fraud"],
        answer: "⚠️ DigiBizz is 100% GENUINE, REAL, and OFFICIAL! It's a Government of Balochistan, Science & IT Department initiative. BEWARE of: ❌ Fake websites, ❌ People claiming to get you admitted for money, ❌ Unauthorized agents. ONLY apply through official website digibizz.gob.pk. If someone asks for money, REPORT them immediately!"
    },
    {
        keywords: ["money for admission", "bribe", "rishwat", "paisa dena", "admission fee"],
        answer: "🚨 ALERT: DigiBizz is COMPLETELY FREE! Anyone asking for money to get you admitted is a FRAUDSTER! ❌ NO admission fee, ❌ NO processing charges, ❌ NO donations, ❌ NO bribes. Report such people immediately. Apply ONLY through official channels. Selection is 100% merit-based!"
    },
    {
        keywords: ["fast track", "short course", "quick", "jaldi course"],
        answer: "DigiBizz offers comprehensive 50-lecture training to ensure QUALITY learning and practical skills. There's no shortcut to building real freelancing skills. The program duration is designed by experts for thorough knowledge transfer. Quick courses don't provide the depth needed for successful freelancing careers."
    },
    {
        keywords: ["after completion", "what next", "after training", "graduation ke baad"],
        answer: "After completing DigiBizz: 1️⃣ Create professional profiles on Upwork, Fiverr, etc., 2️⃣ Build your portfolio with training projects, 3️⃣ Start applying for projects/gigs, 4️⃣ Deliver quality work to build reputation, 5️⃣ Scale your earnings with experience, 6️⃣ Optionally start your own agency. You'll be fully equipped to succeed independently!"
    },
    {
        keywords: ["support after training", "alumni support", "help after course", "baad mein help"],
        answer: "DigiBizz provides comprehensive training and lifetime skills. While formal training support ends after course completion, you can: ✓ Join alumni networks/groups, ✓ Stay connected on social media, ✓ Network with fellow graduates, ✓ Access online resources. Your freelancing success depends on continuous self-learning and practice!"
    },
    {
        keywords: ["guarantee", "success guarantee", "pakka kamana", "guarantee hai"],
        answer: "⚠️ HONEST ANSWER: DigiBizz makes NO guarantees regarding successful freelance accounts, employment, or income. We provide: ✅ Complete training, ✅ All necessary skills, ✅ Expert guidance, ✅ Industry knowledge. YOUR SUCCESS depends on: YOUR dedication, hard work, consistency, practice, and perseverance. We give you the tools - YOU must use them!"
    },

    // ==========================================
    // MOTIVATION & ENCOURAGEMENT
    // ==========================================
    {
        keywords: ["difficult", "hard", "can i do", "confidence", "mushkil lagta hai"],
        answer: "You ABSOLUTELY CAN DO IT! 💪 Remember: ✓ Thousands before you succeeded with NO experience, ✓ Training starts from basics, ✓ Expert trainers guide you step-by-step, ✓ Practice makes perfect, ✓ Every expert was once a beginner. The only thing stopping you is self-doubt. Take the leap, work hard, and you WILL succeed!"
    },
    {
        keywords: ["worth it", "should i join", "is it good", "faida hoga"],
        answer: "ABSOLUTELY YES! 🌟 This is a GOLDEN opportunity: ✅ Completely FREE training, ✅ Monthly stipend, ✅ World-class education, ✅ Government certificate, ✅ Earn in dollars from home, ✅ Financial independence, ✅ Global opportunities. Such opportunities are RARE, especially FREE! Don't let it slip away - APPLY NOW!"
    },
    {
        keywords: ["advice", "tips", "suggestion", "mashwara"],
        answer: "💡 My Advice: 1) Apply immediately when registrations open, 2) Be 100% honest in application, 3) Attend EVERY single class, 4) Complete ALL assignments, 5) Practice daily outside class hours, 6) Ask questions without hesitation, 7) Network with fellow students, 8) Build portfolio during training, 9) Be patient & persistent. Success = Consistency + Hard Work!"
    },
    {
        keywords: ["inspire", "motivation", "encourage", "himmat", "hausla"],
        answer: "🌟 YOU ARE CAPABLE OF AMAZING THINGS! DigiBizz is your gateway to: 💰 Financial independence, 🌍 Global opportunities, 🏠 Work-from-home freedom, 👨‍👩‍👧‍👦 Family support, 🇵🇰 Contributing to Pakistan's economy. You'll represent Balochistan globally, earn in dollars, and transform your life. This is YOUR TIME to shine. Believe in yourself and take action!"
    },
    {
        keywords: ["future", "career", "opportunities", "mustaqbil"],
        answer: "Freelancing opens UNLIMITED opportunities: 🚀 Work with global brands, 🚀 Build your own agency, 🚀 Become a trainer yourself, 🚀 Financial freedom, 🚀 Scale to 6-figure income, 🚀 Location independence. The digital economy is BOOMING! With DigiBizz training + your dedication, you're positioned for a BRIGHT future. The sky is the limit!"
    },
    {
        keywords: ["fear", "scared", "nervous", "dar lagta hai"],
        answer: "Feeling nervous is NORMAL! But remember: 🔹 Fear is temporary, regret is forever, 🔹 You're not alone - thousands are learning with you, 🔹 Expert trainers support you, 🔹 Start small, grow gradually, 🔹 Every successful freelancer started scared. Don't let fear steal your dreams. Take one step at a time. You've got this! 💪"
    },

    // ==========================================
    // PROGRAM TEAM & STAFF
    // ==========================================
    {
        keywords: ["program director", "director", "who runs program"],
        answer: "DigiBizz is led by a dedicated Program Director who oversees all operations, training centers, and strategic initiatives. The Director has successfully conducted awareness sessions across Balochistan and is committed to youth empowerment through digital skills."
    },
    {
        keywords: ["master trainer", "trainer", "instructor", "teacher", "ustaz"],
        answer: "DigiBizz has highly qualified Master Trainers and Trainers in: 🎨 Master Trainer - Graphics (Creative Design), 📱 Master Trainer - Digital Marketing, 🛒 Master Trainer - AWE (Amazon & Web). Plus multiple Trainers across centers. They are experienced professionals providing world-class training!"
    },
    {
        keywords: ["lms incharge", "lms", "learning management", "portal incharge"],
        answer: "The LMS (Learning Management System) Incharge manages the online portal at lms.digibizz.gob.pk where you'll access: ✓ Course materials, ✓ Assignments, ✓ Progress tracking, ✓ Announcements, ✓ Grades and feedback. You'll receive login credentials after selection."
    },
    {
        keywords: ["admin officer", "administration", "me officer"],
        answer: "The Admin Officer manages administrative operations, and the M&E (Monitoring & Evaluation) Officer tracks program performance, student progress, and impact assessment. Together, the team ensures smooth program execution and quality standards."
    },

    // ==========================================
    // TECHNICAL & PLATFORM QUESTIONS
    // ==========================================
    {
        keywords: ["lms portal", "learning portal", "online classes", "portal access"],
        answer: "LMS Portal (lms.digibizz.gob.pk) is your Learning Management System where you'll: ✓ Access course materials and videos, ✓ Submit assignments, ✓ Track your progress, ✓ Receive announcements, ✓ View grades and feedback. You'll get login credentials after final selection and orientation. Keep credentials safe!"
    },
    {
        keywords: ["registration portal", "application portal", "apply kahan se"],
        answer: "Registration Portal: portal.digibizz.gob.pk - This is where you submit your application when admissions open. Fill complete details accurately: personal info, education, CNIC, city, preferred center. ⚠️ Provide CORRECT email - all communication happens via email!"
    },
    {
        keywords: ["forgot password", "login issue", "account problem", "password bhool gaya"],
        answer: "For LMS/Portal login issues: 1) Try password reset option on login page, 2) Check your registered email for reset link, 3) If still facing issues, contact support@digibizz.gob.pk with your registered email and CNIC number. Provide clear details about the problem."
    },
    {
        keywords: ["video lectures", "recorded classes", "online learning", "video hai"],
        answer: "DigiBizz primarily offers in-person classroom training at designated centers for maximum interaction and hands-on learning. Some supplementary materials and recordings may be available through the LMS portal. The program emphasizes practical, in-person training for better skill development."
    },

    // ==========================================
    // PRACTICAL FREELANCING QUESTIONS
    // ==========================================
    {
        keywords: ["portfolio", "samples", "work examples", "portfolio kaise banayein"],
        answer: "Portfolio building is taught in training! You'll create: ✓ Sample projects during course, ✓ Practice work on real scenarios, ✓ Case studies, ✓ Mock client work. Your portfolio showcases your skills to potential clients. Start building during training and continuously update as you complete real projects!"
    },
    {
        keywords: ["proposal", "bid", "how to write proposal", "proposal kaise likhein"],
        answer: "Proposal writing is a KEY skill taught in DigiBizz! You'll learn: ✓ Understanding client requirements, ✓ Writing compelling proposals, ✓ Highlighting relevant skills, ✓ Pricing strategies, ✓ Standing out from competition, ✓ Follow-up techniques. Good proposals = More projects = More earnings!"
    },
    {
        keywords: ["pricing", "rate", "charges", "kitna charge karen", "rate kya rakhen"],
        answer: "Pricing strategy is covered in training: 🔹 Start with competitive rates to build reputation, 🔹 Gradually increase as you gain experience and reviews, 🔹 Consider project complexity and time, 🔹 Research market rates, 🔹 Never undersell your worth. Beginners: $5-15/hour, Experienced: $25-100+/hour depending on skills!"
    },
    {
        keywords: ["payment", "withdraw", "paisa kaise milega", "payment method"],
        answer: "Freelancing platforms offer multiple withdrawal methods: ✓ Bank transfer (direct to Pakistani banks), ✓ Payoneer (popular in Pakistan), ✓ Wise (formerly TransferWise), ✓ PayPal (limited in Pakistan). You'll learn about payment methods, setup, and withdrawal processes during training. Most freelancers use Payoneer or direct bank transfer."
    },
    {
        keywords: ["review", "rating", "feedback", "client review"],
        answer: "Client reviews are CRUCIAL for success: ⭐ Good reviews = More projects, ⭐ Build review score by: Delivering quality work, Meeting deadlines, Clear communication, Going extra mile. Start with smaller projects to earn 5-star reviews, then scale. Your training prepares you to deliver review-worthy work!"
    },
    {
        keywords: ["competition", "competition zyada", "clients nahi milte", "hard to get work"],
        answer: "Yes, competition exists BUT so does MASSIVE demand! Success tips: ✓ Specialize in a niche, ✓ Build strong portfolio, ✓ Write compelling proposals, ✓ Deliver exceptional quality, ✓ Get good reviews, ✓ Be consistent and patient, ✓ Keep learning and improving. DigiBizz prepares you to STAND OUT from competition!"
    },

    // ==========================================
    // FINAL COMPREHENSIVE QUESTIONS
    // ==========================================
    {
        keywords: ["pakistan freelancing", "pakistan rank", "freelancing in pakistan"],
        answer: "🇵🇰 Pakistan ranks 4th globally in freelancing! Pakistani freelancers earn millions in foreign exchange annually. Freelancing is recognized as a major contributor to Pakistan's digital economy. With growing internet penetration and youth population, Pakistan's freelancing industry is BOOMING. You can be part of this success!"
    },
    {
        keywords: ["balochistan youth", "youth empowerment", "naujawan", "youth opportunity"],
        answer: "DigiBizz is specifically designed for Balochistan's youth empowerment! Objectives: ✓ Reduce unemployment, ✓ Provide economic opportunities, ✓ Bridge digital divide, ✓ Promote gender equality, ✓ Enable earning in dollars, ✓ Build skilled generation, ✓ Contribute to provincial economy. YOU are the future of Balochistan!"
    },
    {
        keywords: ["commitment", "dedication", "mehnat", "lagan"],
        answer: "Success requires SERIOUS COMMITMENT: ⏰ Attend every class without fail, ⏰ Practice 2-3 hours daily at home, ⏰ Complete all assignments on time, ⏰ Stay curious and keep learning, ⏰ Be patient - success takes 3-6 months minimum, ⏰ Don't give up when facing challenges. Those who commit fully, succeed fully!"
    },
    {
        keywords: ["ready", "start", "begin", "kab shuru", "when can i start"],
        answer: "START NOW! Steps: 1️⃣ Follow DigiBizz Balochistan on Facebook for updates, 2️⃣ Keep checking digibizz.gob.pk for registration announcements, 3️⃣ Prepare required documents (CNIC, Domicile, Education certificates), 4️⃣ Apply immediately when registration opens, 5️⃣ Prepare for assessments seriously. Don't wait - be ready when opportunity knocks!"
    },
    {
        keywords: ["last date", "deadline", "registration close", "last date kya hai"],
        answer: "Registration dates and deadlines are announced when new batches are launched. They're posted on: 🌐 digibizz.gob.pk website, 📱 DigiBizz Balochistan Facebook page, 📧 You can email support@digibizz.gob.pk to inquire about upcoming batch timelines. ACT FAST when registration opens - seats fill quickly!"
    }
];

// Fallback response when no match is found
const cfaqFallbackResponse = "I apologize, but I don't have specific information about that question. For detailed inquiries, please contact DigiBizz directly:\n\n📞 Phone: 081-9203131\n📧 Email: support@digibizz.gob.pk\n🌐 Website: www.digibizz.gob.pk\n📍 Address: IT Training Institute, Old Pishin Stop, Near TCS Office, Model Town, Quetta\n\nYou can also visit our Facebook page 'DigiBizz Balochistan' for updates. Our team will be happy to assist you!";
    