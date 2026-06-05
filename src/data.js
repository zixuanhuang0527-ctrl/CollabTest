export const serviceCategories = [
  {
    id: 'scalp-therapy',
    name: 'Scalp Therapy',
    tagline: 'Relaxation • Renewal • Preventative Care',
    description: 'A calming head spa ritual designed to refresh the scalp, release tension, and restore a sense of lightness.',
    treatments: [
      {
        name: 'Scalp Detox Ritual',
        forText: 'Daily Maintenance',
        description: 'A deep refresh for the scalp, designed to clear away invisible buildup before it weighs the scalp down.',
        benefits: ['Removes excess oil and sebum.', 'Eliminates product, chemical, and metal residue.', 'Supports a healthier scalp environment.'],
        journey: 'Welcome Fragrance + Steam + Head Therapy + Shoulder, Neck & Arm Massage + Herbal Rinsing + Hair Dry'
      },
      {
        name: 'Scalp Renew',
        forText: 'Stress Relief & Relaxation',
        description: 'A moment to pause, releasing built-up tension and calming overwhelmed minds through therapeutic touch.',
        benefits: ['Supports circulation.', 'Releases muscle tension and fatigue.', 'Refreshes the skin, eyes, and overall sense of well-being.'],
        journey: 'Welcome Fragrance + Steam + Head Therapy + Shoulder, Neck & Arm Massage + Mini Facial + Herbal Rinsing + Hair Dry'
      },
      {
        name: 'Scalp Vitality Revival',
        forText: 'Preventative Scalp Wellness',
        description: 'An elevated scalp ritual featuring premium care and advanced supportive tools for long-term scalp wellness.',
        highlights: ['Milbon Gold Line Enhancing Vivacity', 'Serum Machine Infusion', 'Frequency Brush', 'LED Light Therapy'],
        journey: 'Welcome Fragrance + Steam + Head Therapy + Shoulder, Neck & Arm Massage + Mini Facial + Herbal Rinsing + Hair Dry + Serum Infusion + Frequency Brush + LED Light Therapy'
      }
    ]
  },
  {
    id: 'skin-ritual',
    name: 'Skin Ritual',
    tagline: 'Hydration • Repair • Prevention',
    description: 'Personalized facial rituals designed to support healthy, balanced, radiant skin.',
    treatments: [
      { name: 'Signature Facial', description: 'A refined essential facial designed to cleanse, refresh, and restore everyday skin balance.', generalFacial: true },
      { name: 'The Hydration: Desert Oasis Ritual', description: 'A moisture-focused facial designed to replenish dehydrated skin and restore a softer, more supple glow.', generalFacial: true },
      { name: 'The Rescue: Itch-Relief Depuffing Treatment', description: 'A calming ritual designed for skin that feels flushed, reactive, irritated, or heavy.', generalFacial: true },
      { name: 'The Recharge: Cell Vitality Regeneration', description: 'A revitalizing treatment designed to awaken tired-looking skin and support a more energized complexion.', generalFacial: true },
      { name: 'The Prevention: Daily Inflammation Defense', description: 'A protective facial designed to help maintain calm, balanced, resilient skin.', generalFacial: true },
      { name: 'The Ecosystem: Probiotic ReBalance Treatment', description: 'A balancing facial designed to support the skin’s natural ecosystem and comfort.', generalFacial: true },
      { name: 'The Renewal: Tailored Clinical Acid Peel', description: 'A customized exfoliating treatment designed to refine texture, brighten dullness, and support skin renewal.', caution: true },
      { name: 'The Reconstruction: Bio-Crystal Resurface', description: 'A resurfacing treatment designed to refine uneven texture and support a smoother-looking complexion.', caution: true },
      { name: 'The Activation: Enzymatic Cellular Metabolic Accelerator', description: 'An enzyme-based treatment designed to gently encourage surface renewal and reveal a fresher glow.', caution: true },
      { name: 'The Revival: SkinCeuticals Celestial Waterfall Facial', description: 'A luxury facial ritual inspired by professional skincare science and deep hydration.', generalFacial: true },
      { name: 'The Collagen+: 6D Autologous Matrix Volume Stimulation', description: 'An advanced anti-aging inspired treatment designed to support firmness, bounce, and refined facial contours.', generalFacial: true }
    ]
  },
  {
    id: 'nails-artistry',
    name: 'Nails Artistry',
    tagline: 'Classic • Gel • Custom Designs',
    description: 'Polished nail care and custom artistry with a soft, refined, feminine finish.',
    note: 'Pricing varies by design detail, length, gems, charms, and hand-painted art.',
    treatments: ['Gel Manicure', 'Dipping Powder', 'Japanese Structure Gel', 'Custom Nail Design', 'Gel X Extension', 'Hard Gel Extension', 'Pedicure', 'Spa Pedicure', 'Luxury Spa Pedicure'].map((name) => ({
      name,
      description: `${name} service prepared with refined shaping, careful finishing, and Yaya Spa’s soft polished aesthetic.`,
      duration: 'Duration placeholder',
      price: 'Price placeholder'
    }))
  },
  {
    id: 'lash-design',
    name: 'Lash Design',
    tagline: 'Classic • Hybrid • Volume • Custom Sets',
    description: 'Customized lash designs created to enhance the natural shape and softness of the eyes.',
    note: 'Pricing varies based on lash style, length, volume, color accents, and overall design complexity.',
    treatments: ['Classic Lash Set', 'Hybrid Lash Set', 'Volume Lash Set', 'Wispy Lash Set', 'Bottom Lash Enhancement', 'Custom Lash Design'].map((name) => ({
      name,
      description: `${name} tailored to your eye shape, natural lashes, desired softness, and everyday beauty routine.`,
      duration: 'Duration placeholder',
      price: 'Price placeholder'
    }))
  }
];

export const activeSkinServices = [
  'The Renewal: Tailored Clinical Acid Peel',
  'The Reconstruction: Bio-Crystal Resurface',
  'The Activation: Enzymatic Cellular Metabolic Accelerator'
];
