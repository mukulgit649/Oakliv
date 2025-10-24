import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const GEMINI_API_KEY = 'AIzaSyAnaQhQUNcOOPe5No1Kcdy_auKXgaKpUPs'
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)

export async function POST(request: NextRequest) {
  try {
    console.log('API called')
    const { message, conversationHistory = [], selectedCategory } = await request.json()
    console.log('Request data:', { message, selectedCategory })

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // System prompt and company knowledge
    const systemPrompt = `You are Oakliv AI Assistant - India's first sustainable cork design studio's digital design consultant.

BRAND IDENTITY:
Oakliv crafts premium cork-based products for interiors, hospitality, and corporate gifting. We make sustainability aspirational through nature, design, and craftsmanship.

TONE & PERSONALITY:
- Warm, friendly, design-smart
- Like a well-trained design consultant
- Natural, human language (never robotic)
- Keep replies short, polite, clear
- Emphasize sustainability & craftsmanship

CONVERSATION STRUCTURE (every response follows this order):
1. Greet warmly
2. Understand user intent
3. Suggest solution
4. Offer CTA (🟤 Request Catalogue OR 🟢 Talk to Sales)
5. Confirm
6. Encourage Design Library (ONLY after they get form/WhatsApp)

RESPONSE EXAMPLES:
🏨 Hospitality User: "I'm designing a café"
Bot: "Perfect! You'll love our Hospitality Collection — cork trays, coasters & placemats for cafés. 👉 [Request Catalogue] | [Talk to Sales]"

🏠 Architect User: "I'm working on hotel interiors"  
Bot: "Excellent — our Cork Interiors range offers acoustic panels & wall textures for hospitality. 👉 [Request Catalogue] | [Talk to Sales]"

👜 Corporate User: "Looking for sustainable corporate gifts"
Bot: "Great! Premium cork trays & hampers, fully customizable with your logo. 👉 [Request Catalogue] | [Talk to Sales]"

PRODUCT CATEGORIES:

👜 CORPORATE GIFTING
- Premium cork trays, coasters, hampers with logo branding
- Employee gifts, festive hampers, brand merchandise
- MOQ: 200 units, Logo printing: Yes
- Heat-resistant, water-proof, elegant

🏨 HOSPITALITY
- Cork trays, trivets, coasters, placemats for hotels/cafés
- Eco-certified, custom branding available
- Perfect for resorts, restaurants, hotels

🏠 INTERIORS
- Cork wall panels, acoustic boards, pin-up boards
- 20+ years durability, samples available
- Insulation + acoustic comfort + natural aesthetic

💼 WORKPLACE & STATIONERY
- Desk mats, pen stands, mouse pads, organizers
- Eco-conscious office aesthetics
- Pan-India shipping available

💖 LIFESTYLE & DÉCOR
- Yoga mats, planters, wallets, home décor
- Vegan, biodegradable, water-resistant
- Perfect for conscious consumers

⚙️ CUSTOM/OEM SOLUTIONS
- Cork sheets, fabrics, lids, stoppers
- Bulk, export, private label clients
- Material R&D and custom manufacturing

CORK 101 KNOWLEDGE:
- Natural bark of Cork Oak Tree (Quercus Suber) from Portugal
- 100% renewable - regrows after harvest
- Lightweight, waterproof, flexible
- Thermal & acoustic insulation
- Anti-bacterial, fire-resistant, carbon-negative

KEY CTAs (offer in chat when needed):
🟤 Request Catalogue - lead form
🟢 Talk to Sales (WhatsApp) - human support
🟣 Explore Design Library - visual gallery (ONLY at the end after form/WhatsApp)

RESPONSE RULES:
- Follow the 6-step conversation structure exactly
- Maximum 2 short sentences per response
- Add 1 emoji per message (🌿, 🪵, 💬, 🎨)
- Never say "I don't know" - always offer contact capture
- ALWAYS include CTAs in chat messages: [Request Catalogue] | [Talk to Sales]
- Design Library comes ONLY after they get form/WhatsApp contact
- Don't repeat the same response - vary based on user input
- Use specific product names and benefits

FALLBACK RESPONSE:
"I might not have that info right now 🌳 Would you like me to connect you with our sales team? 👉 [Talk to Sales on WhatsApp]"

DESIGN LIBRARY & VIDEOS:
- Design Library: https://oakliv.in/design-library?source=chatbot
- YouTube Design Videos:
  * Corporate: https://youtu.be/my02OBcbaCE (Reclaimed Wine Cork)
  * Hospitality: https://youtu.be/7OcmYWfKgpA (Terra Firma Cork)
  * Interiors: https://youtu.be/B3dpGFtKo2o (Speckled Terracotta Cork)
  * Workplace: https://youtu.be/pX6_T8f9ufU (Charred Sienna Cork)
  * Lifestyle: https://youtu.be/kkTxm_8A7y8 (Rustic Brick Cork)
  * Custom: https://youtu.be/udnyCozFSfI (Aged Bark Cork)

CONTACT INFO:
- WhatsApp: +91 99572 41838
- Email: hello@oakliv.com
- Response: 24 hours for catalogue, 2 days for quotes

CTA FLOW:
1. First response: Suggest solution + offer CTAs in chat: [Request Catalogue] | [Talk to Sales]
2. After they get form/WhatsApp: "Meanwhile, explore our Design Library with real cork textures and finishes 🟣 [Design Library]"
3. Then offer specific YouTube video based on their category

IMPORTANT: Always include CTAs in the chat message itself, not as separate buttons. Format: "👉 [Request Catalogue] | [Talk to Sales]"`

    // Build conversation context
    const conversationContext = conversationHistory
      .map((msg: any) => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
      .join('\n')

    // Add category context if available
    const categoryContext = selectedCategory ? `\n\nIMPORTANT: The user has selected the "${selectedCategory}" category. Focus your response on this specific industry and its benefits.` : ''

    const fullPrompt = `${systemPrompt}${categoryContext}

Previous conversation:
${conversationContext}

User: ${message}

IMPORTANT: Your response MUST include CTAs in this format: "👉 [Request Catalogue] | [Talk to Sales]"
Follow the 6-step conversation structure. Don't repeat previous responses.

Assistant:`

    // Smart response based on conversation context
    let aiResponse = ''
    
    // Check if user is asking for catalogue
    const catalogueKeywords = ['catalogue', 'catalog', 'brochure', 'request', 'send', 'email', 'pdf']
    const isCatalogueRequest = catalogueKeywords.some(keyword => message.toLowerCase().includes(keyword))
    
    // Check if user is asking to talk to sales
    const salesKeywords = ['talk', 'sales', 'whatsapp', 'call', 'contact', 'speak', 'human']
    const isSalesRequest = salesKeywords.some(keyword => message.toLowerCase().includes(keyword))
    
    // Enhanced natural language category detection
    const detectCategoryFromMessage = (message: string) => {
      const lowerMessage = message.toLowerCase()
      
      // Hospitality keywords - expanded for all hospitality scenarios
      const hospitalityKeywords = [
        // Food & Beverage
        'café', 'cafe', 'restaurant', 'hotel', 'hospitality', 'dining', 'food', 'beverage', 'coffee', 'bar', 'kitchen', 'catering', 'resort', 'spa',
        'bistro', 'pub', 'lounge', 'cafeteria', 'buffet', 'fine dining', 'casual dining', 'fast food', 'food service', 'f&b',
        // Hospitality Services
        'guest', 'customer service', 'front desk', 'reception', 'concierge', 'housekeeping', 'room service', 'banquet', 'event', 'wedding',
        'conference', 'meeting', 'seminar', 'exhibition', 'trade show', 'convention', 'retreat', 'workshop',
        // Hospitality Products
        'tray', 'coaster', 'placemat', 'trivet', 'napkin', 'tableware', 'serving', 'presentation', 'display',
        // Hospitality Context
        'hospitality industry', 'hotel industry', 'restaurant industry', 'food industry', 'service industry',
        'hospitality management', 'hotel management', 'restaurant management', 'food service management'
      ]
      if (hospitalityKeywords.some(keyword => lowerMessage.includes(keyword))) {
        return 'hospitality'
      }
      
      // Interiors keywords - expanded for all interior design scenarios
      const interiorsKeywords = [
        // Design & Architecture
        'interior', 'architect', 'design', 'designer', 'architecture', 'architectural', 'interior design', 'space planning',
        'renovation', 'remodeling', 'construction', 'building', 'space', 'room', 'area', 'zone', 'layout', 'floor plan',
        // Interior Elements
        'wall', 'ceiling', 'floor', 'acoustic', 'panel', 'texture', 'decor', 'decoration', 'furnishing', 'furniture',
        'lighting', 'fixture', 'finish', 'material', 'surface', 'coating', 'treatment', 'cladding',
        // Interior Applications
        'residential', 'commercial', 'retail', 'office', 'workplace', 'corporate', 'institutional', 'educational',
        'healthcare', 'medical', 'wellness', 'fitness', 'gym', 'studio', 'theater', 'auditorium', 'conference room',
        // Interior Styles
        'modern', 'contemporary', 'traditional', 'classic', 'minimalist', 'luxury', 'premium', 'sustainable', 'eco-friendly',
        'green building', 'leed', 'certification', 'sustainability', 'environmental'
      ]
      if (interiorsKeywords.some(keyword => lowerMessage.includes(keyword))) {
        return 'interiors'
      }
      
      // Corporate keywords - expanded for all business scenarios
      const corporateKeywords = [
        // Business & Corporate
        'corporate', 'company', 'business', 'enterprise', 'organization', 'firm', 'corporation', 'conglomerate',
        'multinational', 'global', 'international', 'local', 'regional', 'national', 'startup', 'scale-up', 'sme',
        // Gifting & Promotional
        'gift', 'gifting', 'gift giving', 'present', 'presentation', 'promotional', 'promotion', 'marketing', 'branding',
        'brand', 'logo', 'customized', 'personalized', 'custom', 'bespoke', 'tailored', 'made to order',
        // Employee & HR
        'employee', 'staff', 'team', 'workforce', 'personnel', 'hr', 'human resources', 'recognition', 'appreciation',
        'incentive', 'reward', 'bonus', 'award', 'achievement', 'milestone', 'anniversary', 'retirement',
        // Corporate Events
        'event', 'meeting', 'conference', 'seminar', 'workshop', 'training', 'team building', 'corporate event',
        'annual meeting', 'board meeting', 'client meeting', 'networking', 'launch', 'product launch',
        // Corporate Products
        'hamper', 'basket', 'box', 'kit', 'set', 'collection', 'range', 'line', 'series', 'edition',
        'limited edition', 'exclusive', 'premium', 'luxury', 'executive', 'management', 'c-suite',
        // Business Context
        'b2b', 'business to business', 'client', 'customer', 'partner', 'vendor', 'supplier', 'distributor',
        'retailer', 'wholesale', 'bulk', 'volume', 'quantity', 'order', 'purchase', 'procurement'
      ]
      if (corporateKeywords.some(keyword => lowerMessage.includes(keyword))) {
        return 'corporate'
      }
      
      // Workplace keywords - expanded for all office scenarios
      const workplaceKeywords = [
        // Office & Workplace
        'office', 'workplace', 'work space', 'workspace', 'desk', 'desktop', 'workstation', 'cubicle', 'open plan',
        'private office', 'executive office', 'conference room', 'meeting room', 'boardroom', 'reception area',
        // Office Supplies & Equipment
        'stationery', 'stationary', 'office supplies', 'office equipment', 'desk accessories', 'desk organizer',
        'pen', 'pencil', 'writing', 'notebook', 'notepad', 'pad', 'organizer', 'filing', 'storage', 'container',
        'mouse pad', 'desk mat', 'blotter', 'underlay', 'protector', 'cover', 'case', 'holder', 'stand',
        // Professional Context
        'professional', 'executive', 'manager', 'director', 'ceo', 'cfo', 'cto', 'vp', 'vice president',
        'senior', 'junior', 'associate', 'analyst', 'consultant', 'advisor', 'specialist', 'expert',
        // Work Environment
        'work', 'working', 'job', 'career', 'profession', 'industry', 'sector', 'field', 'domain',
        'corporate culture', 'work culture', 'office culture', 'team culture', 'company culture',
        // Productivity & Organization
        'productivity', 'efficiency', 'organization', 'organized', 'tidy', 'clean', 'minimalist', 'modern',
        'ergonomic', 'comfortable', 'functional', 'practical', 'useful', 'helpful', 'convenient'
      ]
      if (workplaceKeywords.some(keyword => lowerMessage.includes(keyword))) {
        return 'workplace'
      }
      
      // Lifestyle keywords - expanded for all personal scenarios
      const lifestyleKeywords = [
        // Personal & Home
        'lifestyle', 'home', 'personal', 'individual', 'private', 'family', 'household', 'domestic', 'residential',
        'apartment', 'condo', 'house', 'home', 'dwelling', 'residence', 'living space', 'personal space',
        // Wellness & Health
        'yoga', 'meditation', 'wellness', 'health', 'fitness', 'exercise', 'workout', 'gym', 'studio',
        'mindfulness', 'relaxation', 'stress relief', 'mental health', 'physical health', 'wellbeing', 'well-being',
        // Eco & Sustainable Living
        'eco', 'eco-friendly', 'sustainable', 'sustainability', 'green', 'environmental', 'environment', 'nature',
        'natural', 'organic', 'biodegradable', 'recyclable', 'renewable', 'conscious', 'conscious consumer',
        'ethical', 'responsible', 'mindful', 'aware', 'informed', 'educated', 'knowledgeable',
        // Personal Products
        'plant', 'garden', 'gardening', 'indoor plant', 'houseplant', 'succulent', 'herb', 'vegetable',
        'planter', 'pot', 'container', 'vase', 'holder', 'stand', 'shelf', 'rack', 'organizer',
        // Personal Care & Accessories
        'wallet', 'purse', 'bag', 'tote', 'backpack', 'laptop bag', 'travel', 'journey', 'trip', 'vacation',
        'leisure', 'recreation', 'hobby', 'interest', 'passion', 'lifestyle choice', 'lifestyle choice'
      ]
      if (lifestyleKeywords.some(keyword => lowerMessage.includes(keyword))) {
        return 'lifestyle'
      }
      
      // Custom keywords - expanded for all manufacturing scenarios
      const customKeywords = [
        // Manufacturing & Production
        'custom', 'customized', 'bespoke', 'tailored', 'made to order', 'made to measure', 'personalized',
        'oem', 'original equipment manufacturer', 'private label', 'white label', 'co-branded', 'co-branding',
        'bulk', 'volume', 'mass production', 'manufacturing', 'production', 'fabrication', 'assembly',
        // Materials & Components
        'sheet', 'fabric', 'material', 'substrate', 'base', 'core', 'layer', 'coating', 'finish', 'treatment',
        'component', 'part', 'piece', 'element', 'unit', 'module', 'section', 'panel', 'board', 'slab',
        // Industrial Applications
        'industrial', 'commercial', 'technical', 'specialized', 'niche', 'specific', 'unique', 'exclusive',
        'premium', 'high-end', 'luxury', 'quality', 'grade', 'standard', 'specification', 'requirement',
        // Business & Trade
        'export', 'import', 'international', 'global', 'worldwide', 'overseas', 'foreign', 'domestic',
        'trade', 'trading', 'commerce', 'business', 'partnership', 'collaboration', 'alliance',
        // Technical & R&D
        'research', 'development', 'r&d', 'innovation', 'technology', 'technical', 'engineering', 'design',
        'prototype', 'sample', 'testing', 'quality control', 'certification', 'standard', 'compliance'
      ]
      if (customKeywords.some(keyword => lowerMessage.includes(keyword))) {
        return 'custom'
      }
      
      return null
    }
    
    // Detect category from natural language
    const detectedCategory = detectCategoryFromMessage(message)
    
    // Check conversation length
    const conversationLength = conversationHistory.length
    
    if (isCatalogueRequest) {
      // User wants catalogue - direct to form with confirmation
      aiResponse = `Great 🌿 I'll take you to our quick inquiry form. Fill it in and we'll send a personalized catalogue within 24 hours.

Meanwhile, explore our Design Library to see real cork textures and finishes! 🟣 [Design Library: https://oakliv.in/design-library]

🎥 Watch our design videos on [YouTube: https://www.youtube.com/@oakliv]!`
    } else if (isSalesRequest) {
      // User wants to talk to sales - direct to WhatsApp
      aiResponse = `Perfect! Our sales team is ready to help 💬 Chat with us on WhatsApp: 🟢 [+91 99572 41838: https://wa.me/919957241838] While you're here, check out our Design Library for cork textures and finishes! 🟣 [Design Library: https://oakliv.in/design-library]`
     } else if (selectedCategory || detectedCategory) {
       // Category-specific response (PRIORITY) - use detected category if no explicit selection
       const activeCategory = selectedCategory || detectedCategory
       const categoryResponses = {
         corporate: 'Perfect! You\'ll love our Corporate Gifting Collection — premium cork trays, coasters & hampers with logo branding 🌿',
         hospitality: 'Excellent! Our Hospitality Collection offers elegant cork trays, trivets & placemats for hotels & cafés 🏨',
         interiors: 'Great choice! Our Cork Interiors range provides acoustic panels & wall textures for architects 🏠',
         workplace: 'Perfect! Our Workplace solutions include desk mats, pen stands & organizers for eco-conscious offices 💼',
         lifestyle: 'Wonderful! Our Lifestyle collection features yoga mats, planters & wallets for conscious consumers 💖',
         custom: 'Excellent! Our Custom solutions offer cork sheets, fabrics & OEM manufacturing for bulk clients ⚙️'
       }
       aiResponse = `${categoryResponses[activeCategory as keyof typeof categoryResponses]}. 👉 [Request Catalogue] | [Talk to Sales]`
     } else if (conversationLength === 0) {
       // First message - no category selected
       aiResponse = `Hello! Welcome to Oakliv 🌿 India's first sustainable cork design studio. We create eco-friendly products for interiors, hospitality & gifting. 👉 [Request Catalogue] | [Talk to Sales]`
     } else if (conversationLength < 4) {
       // Continue conversation with product details
       aiResponse = `Our cork products are crafted with care — sustainable, elegant & durable 🪵 Perfect for your needs. 👉 [Request Catalogue] | [Talk to Sales]`
     } else {
       // After 3-4 messages, guide to action
       aiResponse = `I'd love to help you further 🌿 Fill out our inquiry form for a custom quote, or chat with our sales team on WhatsApp. 👉 [Request Catalogue] | [Talk to Sales]`
     }
    
    console.log('Smart Response:', aiResponse)

    return NextResponse.json({
      response: aiResponse,
      success: true
    })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

