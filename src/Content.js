export default {

	courses: [
		{
			id: 'wdi_certificate',
			label: 'Web Development Immersive Certificate',
			length: '45 weeks',
		},
		{
			id: 'wdi_aos',
			label: 'Associate of Science in Computer Science and Web Architecture',
			length: '60 weeks',
		}
	],

	documents: {
		essay: {
			label: 'Essay',
			message: '', 
		},
		identification: {
			label: 'Official ID',
			message: 'This can be any official ID, including your license,  passport...' 
		},
		passport: {
			label: 'Passport',
			message: '',
		},
		ssc: {
			label: 'Social Security Card',
			message: ''
		},
		diploma: {
			label: 'Diploma',
			message: 'This can be a high school diploma or college diploma. If you do not have your diploma, we can also accept an official transcript. If you do not have access to either your diploma or transcript, you can make a request to your school to have them send you a new copy.'
		},
		dd214: {
			label: 'DD-214',
			message: '',
		},
		coe: {
			label: 'Certificate of Eligibility',
			message: '',
		},
		proof32k: {
			label: 'Proof of access to $32,000',
			message: '',
		},
		affidavit: {
			label: 'Affidavit of Support',
			message: '',
		},
		f1: {
			label: 'F1 Student Visa',
			message: '',
		},
	},

	studentTypes: [
		{
			id: 'civilian',
			label: 'American Civilian (non-veteran)',
			mondayLabel: 'American Civilian',
			types: [
				{
					id: 'fafsa',
					label: 'Financial Aid',
					mondayLabel: 'FAFSA',
					requiredDocuments: [
						'essay', 'identification', 'diploma'
					],
				},
				{
					id: 'pocket',
					label: 'Out of Pocket',
					mondayLabel: 'None',
					requiredDocuments: [
						'essay', 'identification', 'diploma'
					],
				},
			],
		},
		{
			id: 'veteran',
			label: 'American Veteran (or dependent of a veteran)',
			mondayLabel: 'American Veteran',
			types: [
				{
					id: 'ch31',
					label: 'Chapter 31 (Montgomery Bill)',
					mondayLabel: 'Chapter 31',
					requiredDocuments: [
						'essay', 'identification', 'diploma', 'dd214',
					],
				},
				{
					id: 'ch33',
					label: 'Chapter 33 (Post-9/11)',
					mondayLabel: 'Chapter 33',
					requiredDocuments: [
						'essay', 'identification', 'diploma', 'dd214', 'coe',
					],
				},
				{
					id: 'ch35',
					label: 'Chapter 35',
					mondayLabel: 'Chapter 35',
					requiredDocuments: [
						'essay', 'identification', 'diploma',
					],
				},
				{
					id: 'vrrap',
					label: 'VRRAP',
					mondayLabel: 'VRRAP',
					requiredDocuments: [
						'essay', 'identification', 'diploma', 'dd214', 'coe',
					],
				},
				{
					id: 'other',
					label: 'Other',
					mondayLabel: 'Other - veteran',
					requiredDocuments: [
						'essay', 'identification', 'diploma', 'dd214',
					],
				},
			],
		},
		{
			id: 'international',
			label: 'International Student',
			mondayLabel: 'International',
			types: [
				{
					id: 'new',
					label: 'Living outside the United States',
					requiredDocuments: [
						'essay', 'passport', 'diploma', 'proof32k',
					],
				},
				{
					id: 'transfer',
					label: 'Living in the United States using an F1 visa',
					requiredDocuments: [
						'essay', 'passport', 'diploma', 'proof32k',
					],
				},
				{
					id: 'problem',
					label: 'Living in the United States without an F1 visa',
					requiredDocuments: [],
				},
			],
		},
	],
};
