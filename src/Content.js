export default {

	courses: [
		{
			name: 'Web Development Immersives',
			length: '45 weeks',
		},
		{
			name: 'Associate of Science in Computer Science and Web Architecture',
			length: '60 weeks',
		}
	],

	files: {
		id: {
			label: 'ID',
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
		funds: {
			label: 'Proof of access to $32,000',
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
			requiredFiles: [
				'id', 'ssc', 'diploma'
			],
		},
		{
			id: 'veteran',
			label: 'American Veteran (or dependent of a veteran)',
			types: [
				{
					id: 'ch31',
					label: 'Chapter 31 (Montgomery Bill)',
					requiredFiles: [
						'id', 'diploma', 'dd214',
					],
				},
				{
					id: 'ch33',
					label: 'Chapter 33 (Post-9/11)',
					requiredFiles: [
						'id', 'diploma', 'dd214', 'coe',
					],
				},
				{
					id: 'ch35',
					label: 'Chapter 35',
					requiredFiles: [
						'id', 'diploma', 'ssc',
					],
				},
				{
					id: 'other',
					label: 'Other',
					requiredFiles: [
						'id', 'diploma', 'dd214',
					],
				},
			],
		},
		{
			id: 'international',
			label: 'International Student',
			types: [
				{
					id: 'new',
					label: 'Living outside the United States',
					requiredFiles: [
						'passport', 'diploma', 'funds',
					],
				},
				{
					id: 'transfer',
					label: 'Living in the United States using an F1 visa',
					requiredFiles: [
						'passport', 'diploma', 'funds',
					],
				},
				{
					id: 'problem',
					label: 'Living in the United States without an F1 visa',
					requiredFiles: [],
				},
			],
		},
	],
};
