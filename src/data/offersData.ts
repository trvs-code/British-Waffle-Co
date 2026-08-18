import { Offer } from '../types';

export const SPECIAL_OFFERS: Offer[] = [
  {
    id: 'offer-1',
    title: 'The Tribe Combo',
    tag: 'POPULAR COMBO',
    code: 'TRIBE50',
    discount: '50% OFF',
    description: 'Order any 2 Signature Bubble Waffles & enjoy your choice of Signature Cold Coffee or Chocolate Shake at half price!',
    terms: 'Valid on direct dine-in & takeaway orders at our Malad East outlet.',
    validUntil: 'Limited Time Deal',
    accentColor: '#c67d3e'
  },
  {
    id: 'offer-2',
    title: 'Sweet Takeaway Special',
    tag: 'TAKEAWAY SAVER',
    code: 'SWEET15',
    discount: '15% FLAT OFF',
    description: 'Enjoy a flat 15% discount on all takeaway and direct pickup orders above ₹499. Freshly packed in our signature dessert boxes.',
    terms: 'Applicable on orders placed via WhatsApp or phone pickup.',
    validUntil: 'Ongoing Offer',
    accentColor: '#a35d25'
  },
  {
    id: 'offer-3',
    title: 'Student Tribe Perk',
    tag: 'STUDENT SPECIAL',
    code: 'STUDENTFUDGE',
    discount: 'FREE DRIZZLE',
    description: 'Flash your valid College or School ID card at the counter and get complimentary double Belgian chocolate fudge drizzle on any waffle.',
    terms: 'One redemption per student ID card per visit.',
    validUntil: 'All Days 2PM - 7PM',
    accentColor: '#78350f'
  }
];
