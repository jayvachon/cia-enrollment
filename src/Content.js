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
			message: 'In a page or less, tell us why you are interested in learning to code, why you think Code Immersives is a good fit for you, and what you would like to do with your skills after you graduate.', 
		},
		identification: {
			label: 'Official ID',
			message: 'Any form of photo ID that includes your full name and date of birth is acceptable. Examples include: driver\'s license, passport, or military ID.' 
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
			message: 'To meet this requirement, you can submit a GED, or high school diploma or transcript showing that you have graduated. You can also submit a college degree or transcript showing that you have graduated college. If you do not have access to any of these, you can request that your school send you a new copy.'
		},
		credentialEvaluation: {
			label: 'Credential Evaluation',
			download: 'Credential_Evaluation.pdf',
			message: 'If you do not have a diploma from an American high school or university, you must complete a credential evaluation with International Evaluation Services. To do this, download and fill out the above form, and email it along with your transcripts to Mario at IES (info@iesedu.org). Once completed, return here to upload your credential evaluation. (If you have a diploma from an American school, you can skip this step.)',
		},
		dd214: {
			label: 'DD-214',
			message: '',
		},
		coe: {
			label: 'Certificate of Eligibility',
			message: 'If you do not yet have your COE, you can instead submit a screenshot of your Statement of Benefits posted on the VA website.',
		},
		proof32k: {
			label: 'Proof of access to $32,000',
			message: 'Please upload a screenshot from your bank account showing a balance of at least $32,000 to cover the cost of tuition plus the cost of living in the United States without employment. If you plan to be supported by a family member or friend, you can instead upload a screenshot of their bank account along with an Affidavit of Support form (see below)',
		},
		affidavit: {
			label: 'Affidavit of Support (optional)',
			download: 'Affidavit_of_Support.pdf',
			message: 'If you plan to be financially supported by a family member or a friend, have them fill out this form. If you will be paying tuition on your own, you do not need to use this form.',
		},
		f1: {
			label: 'F1 Student Visa',
			message: '',
		},
		i20transfer: {
			label: 'I-20 Transfer-In Form',
			download: 'I-20_Transfer-In_form.doc',
			message: 'Fill out this form with your previous school and then upload it for us to review.',
		},
		i20creationAndDelivery: {
			label: 'I-20 Creation and Delivery Form',
			download: 'I-20_Creation_and_Delivery.pdf',
			message: 'The information on this form will be used to create your I-20.',
		},
		i20: {
			label: "I-20",
			message: '',
		},
		picture: {
			label: 'Headshot',
			message: 'Upload a picture of yourself from the shoulders up. This should be an ID-quality photo, meaning that your face is clearly visible, with no glasses or non-religious headwear.',
		},
	},

	studentTypes: [
		{
			id: 'civilian',
			label: 'American Citizen (non-veteran)',
			mondayLabel: 'American Civilian',
			types: [
				{
					id: 'fafsa',
					label: 'Financial Aid',
					mondayLabel: 'FAFSA',
					requiredDocuments: [
						'essay', 'identification', 'diploma', 'picture'
					],
				},
				{
					id: 'pocket',
					label: 'Out of Pocket',
					mondayLabel: 'None',
					requiredDocuments: [
						'essay', 'identification', 'diploma', 'picture'
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
						'essay', 'identification', 'diploma', 'dd214', 'picture'
					],
				},
				{
					id: 'ch33',
					label: 'Chapter 33 (Post-9/11)',
					mondayLabel: 'Chapter 33',
					requiredDocuments: [
						'essay', 'identification', 'diploma', 'dd214', 'coe', 'picture'
					],
				},
				{
					id: 'ch35',
					label: 'Chapter 35',
					mondayLabel: 'Chapter 35',
					requiredDocuments: [
						'essay', 'identification', 'diploma', 'picture'
					],
				},
				{
					id: 'vrrap',
					label: 'VRRAP',
					mondayLabel: 'VRRAP',
					requiredDocuments: [
						'essay', 'identification', 'diploma', 'dd214', 'coe', 'picture'
					],
				},
				{
					id: 'other',
					label: 'Other',
					mondayLabel: 'Other - veteran',
					requiredDocuments: [
						'essay', 'identification', 'diploma', 'dd214', 'picture'
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
					mondayLabel: 'Need Visa',
					requiredDocuments: [
						'essay', 'passport', 'diploma', 'credentialEvaluation', 'proof32k', 'affidavit', 'i20creationAndDelivery', 'f1', 'i20', 'picture'
					],
				},
				{
					id: 'transfer',
					label: 'Living in the United States using an F1 visa',
					mondayLabel: 'Have Visa',
					requiredDocuments: [
						'essay', 'passport', 'diploma', 'credentialEvaluation', 'proof32k', 'affidavit', 'i20transfer', 'f1', 'i20', 'picture'
					],
				},
				{
					id: 'problem',
					label: 'Living in the United States without an F1 visa',
					mondayLabel: 'N/A',
					requiredDocuments: [],
				},
			],
		},
	],
};
