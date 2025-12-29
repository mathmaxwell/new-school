export interface IInfo {
	id: string
	date: string //15.12.2025
	lessons: ILesson[]
	entryTime: string
	exitTime: string
	entryPhoto: string
	exitPhoto: string
}
export interface ILesson {
	id: string
	name: string
	grade: number
	startTime: string //08:00
	endTime: string //09:00
	homeWork: string
	engagement: IEngagement[]
	emotion: IEmotion
	entryTime: string
	exitTime: string
}
export interface IEmotion {
	happy: number
	sad: number
	neutral: number
	angry: number
}
export interface IEngagement {
	id: string
	image: string //http.....
	time: string //это время будет между startTime endTime
	description: {
		uz: string
		ru: string
		eng: string
	}
	engagementLevel: number //88%
}
export const weekDays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
]

export const weekInfo: IInfo[] = [
	{
		id: 'day-1',
		date: '15.12.2025',
		entryTime: '07:55',
		exitTime: '09:05',
		entryPhoto: 'https://example.com/entry-math.jpg',
		exitPhoto: 'https://example.com/exit-math.jpg',
		lessons: [
			{
				id: 'lesson-1',
				name: 'math',
				grade: 4,
				startTime: '08:00',
				endTime: '09:00',
				entryTime: '08:02',
				exitTime: '09:02',
				homeWork: 'Solve exercises 1–10',
				emotion: {
					happy: 70,
					sad: 5,
					neutral: 20,
					angry: 5,
				},
				engagement: [
					{
						id: 'eng-1',
						image: 'https://example.com/eng1.png',
						time: '08:25',
						description: {
							uz: 'Faol qatnashdi',
							ru: 'Активно участвовал',
							eng: 'Actively participated',
						},
						engagementLevel: 88,
					},
					{
						id: 'eng-1-2',
						image: 'https://example.com/eng1-2.png',
						time: '08:35',
						description: {
							uz: 'Masalani yechdi',
							ru: 'Решил пример на доске',
							eng: 'Solved problem on the board',
						},
						engagementLevel: 85,
					},
					{
						id: 'eng-1-3',
						image: 'https://example.com/eng1-3.png',
						time: '08:50',
						description: {
							uz: 'Guruhda muhokama qildi',
							ru: 'Обсуждал в группе',
							eng: 'Discussed in group',
						},
						engagementLevel: 80,
					},
					{
						id: 'eng-1-4',
						image: 'https://example.com/eng1-4.png',
						time: '08:58',
						description: {
							uz: 'Savol berdi',
							ru: 'Задал вопрос учителю',
							eng: 'Asked a question to teacher',
						},
						engagementLevel: 90,
					},
				],
			},
			{
				id: 'lesson-7',
				name: 'literature',
				grade: 5,
				startTime: '09:10',
				endTime: '10:10',
				entryTime: '09:02',
				exitTime: '10:02',
				homeWork: 'Read chapter 3 of the book',
				emotion: {
					happy: 75,
					sad: 5,
					neutral: 15,
					angry: 5,
				},
				engagement: [
					{
						id: 'eng-7-1',
						image: 'https://example.com/eng7-1.png',
						time: '09:20',
						description: {
							uz: 'Matnni o‘qib chiqdi',
							ru: 'Читал текст вслух',
							eng: 'Read text aloud',
						},
						engagementLevel: 82,
					},
					{
						id: 'eng-7-2',
						image: 'https://example.com/eng7-2.png',
						time: '09:40',
						description: {
							uz: 'Personaj haqida fikr bildirdi',
							ru: 'Высказал мнение о персонаже',
							eng: 'Expressed opinion about character',
						},
						engagementLevel: 87,
					},
					{
						id: 'eng-7-3',
						image: 'https://example.com/eng7-3.png',
						time: '10:00',
						description: {
							uz: 'Savollarga javob berdi',
							ru: 'Отвечал на вопросы по тексту',
							eng: 'Answered text questions',
						},
						engagementLevel: 85,
					},
				],
			},
		],
	},
	{
		id: 'day-2',
		date: '16.12.2025',
		entryTime: '09:05',
		exitTime: '12:35',
		entryPhoto: 'https://example.com/entry-pe.jpg',
		exitPhoto: 'https://example.com/exit-pe.jpg',
		lessons: [
			{
				id: 'lesson-2',
				name: 'english',
				grade: 5,
				startTime: '09:00',
				endTime: '10:00',
				entryTime: '09:00',
				exitTime: '10:00',
				homeWork: 'Learn 10 new words',
				emotion: {
					happy: 60,
					sad: 10,
					neutral: 25,
					angry: 5,
				},
				engagement: [
					{
						id: 'eng-2',
						image: 'https://example.com/eng2.png',
						time: '09:40',
						description: {
							uz: 'Savollarga javob berdi',
							ru: 'Отвечал на вопросы',
							eng: 'Answered questions',
						},
						engagementLevel: 82,
					},
					{
						id: 'eng-2-2',
						image: 'https://example.com/eng2-2.png',
						time: '09:15',
						description: {
							uz: 'Dialog o‘ynadi',
							ru: 'Разыграл диалог',
							eng: 'Role-played dialogue',
						},
						engagementLevel: 88,
					},
					{
						id: 'eng-2-3',
						image: 'https://example.com/eng2-3.png',
						time: '09:50',
						description: {
							uz: 'Yangi so‘zlarni takrorladi',
							ru: 'Повторял новые слова',
							eng: 'Repeated new words',
						},
						engagementLevel: 80,
					},
					{
						id: 'eng-2-4',
						image: 'https://example.com/eng2-4.png',
						time: '09:58',
						description: {
							uz: 'Grammatika mashqini bajardi',
							ru: 'Выполнил грамматическое упражнение',
							eng: 'Completed grammar exercise',
						},
						engagementLevel: 85,
					},
				],
			},
			{
				id: 'lesson-8',
				name: 'physical education',
				grade: 5,
				startTime: '10:30',
				endTime: '11:30',
				entryTime: '10:30',
				exitTime: '11:30',
				homeWork: 'No homework',
				emotion: {
					happy: 85,
					sad: 5,
					neutral: 10,
					angry: 0,
				},
				engagement: [
					{
						id: 'eng-8-1',
						image: 'https://example.com/eng8-1.png',
						time: '10:40',
						description: {
							uz: 'Jamoaviy o‘yinda faol',
							ru: 'Активен в командной игре',
							eng: 'Active in team game',
						},
						engagementLevel: 92,
					},
					{
						id: 'eng-8-2',
						image: 'https://example.com/eng8-2.png',
						time: '11:00',
						description: {
							uz: 'Mashqlarni to‘g‘ri bajardi',
							ru: 'Правильно выполнял упражнения',
							eng: 'Performed exercises correctly',
						},
						engagementLevel: 90,
					},
					{
						id: 'eng-8-3',
						image: 'https://example.com/eng8-3.png',
						time: '11:20',
						description: {
							uz: 'Jamoani qo‘llab-quvvatladi',
							ru: 'Поддерживал команду',
							eng: 'Supported the team',
						},
						engagementLevel: 88,
					},
				],
			},
		],
	},
	{
		id: 'day-3',
		date: '17.12.2025',
		entryTime: '07:55',
		exitTime: '09:05',
		entryPhoto: 'https://example.com/entry-physics.jpg',
		exitPhoto: 'https://example.com/exit-physics.jpg',
		lessons: [
			{
				id: 'lesson-3',
				name: 'physics',
				grade: 4,
				startTime: '08:00',
				endTime: '09:00',
				entryTime: '08:00',
				exitTime: '09:00',
				homeWork: 'Read topic about motion',
				emotion: {
					happy: 50,
					sad: 15,
					neutral: 30,
					angry: 5,
				},

				engagement: [
					{
						id: 'eng-3',
						image: 'https://example.com/eng3.png',
						time: '08:50',
						description: {
							uz: 'Diqqat bilan tingladi',
							ru: 'Внимательно слушал',
							eng: 'Listened carefully',
						},
						engagementLevel: 75,
					},
					{
						id: 'eng-3-2',
						image: 'https://example.com/eng3-2.png',
						time: '08:20',
						description: {
							uz: 'Tajribani kuzatdi',
							ru: 'Наблюдал эксперимент',
							eng: 'Observed experiment',
						},
						engagementLevel: 78,
					},
					{
						id: 'eng-3-3',
						image: 'https://example.com/eng3-3.png',
						time: '08:40',
						description: {
							uz: 'Eslatmalar yozdi',
							ru: 'Делал записи',
							eng: 'Took notes',
						},
						engagementLevel: 72,
					},
					{
						id: 'eng-3-4',
						image: 'https://example.com/eng3-4.png',
						time: '08:55',
						description: {
							uz: 'Savol berdi',
							ru: 'Задал вопрос',
							eng: 'Asked a question',
						},
						engagementLevel: 80,
					},
				],
			},
			{
				id: 'lesson-9',
				name: 'biology',
				grade: 4,
				startTime: '09:10',
				endTime: '10:10',
				entryTime: '09:00',
				exitTime: '10:00',
				homeWork: 'Draw plant cell',
				emotion: {
					happy: 70,
					sad: 10,
					neutral: 15,
					angry: 5,
				},
				engagement: [
					{
						id: 'eng-9-1',
						image: 'https://example.com/eng9-1.png',
						time: '09:25',
						description: {
							uz: 'Mikroskopda kuzatdi',
							ru: 'Наблюдал в микроскоп',
							eng: 'Observed under microscope',
						},
						engagementLevel: 85,
					},
					{
						id: 'eng-9-2',
						image: 'https://example.com/eng9-2.png',
						time: '09:45',
						description: {
							uz: 'Hujayra qismlarini nomladi',
							ru: 'Называл части клетки',
							eng: 'Named cell parts',
						},
						engagementLevel: 82,
					},
					{
						id: 'eng-9-3',
						image: 'https://example.com/eng9-3.png',
						time: '10:00',
						description: {
							uz: 'Guruhda muhokama qildi',
							ru: 'Обсуждал в группе',
							eng: 'Discussed in group',
						},
						engagementLevel: 80,
					},
				],
			},
		],
	},
	{
		id: 'day-4',
		date: '18.12.2025',
		entryTime: '09:55',
		exitTime: '11:05',
		entryPhoto: 'https://example.com/entry-history.jpg',
		exitPhoto: 'https://example.com/exit-history.jpg',
		lessons: [
			{
				id: 'lesson-4',
				name: 'history',
				grade: 5,
				startTime: '10:00',
				endTime: '11:00',
				entryTime: '09:55',
				exitTime: '11:00',
				homeWork: 'Prepare short presentation',
				emotion: {
					happy: 65,
					sad: 5,
					neutral: 25,
					angry: 5,
				},

				engagement: [
					{
						id: 'eng-4',
						image: 'https://example.com/eng4.png',
						time: '10:30',
						description: {
							uz: 'Munozarada qatnashdi',
							ru: 'Участвовал в обсуждении',
							eng: 'Participated in discussion',
						},
						engagementLevel: 90,
					},
					{
						id: 'eng-4-2',
						image: 'https://example.com/eng4-2.png',
						time: '10:15',
						description: {
							uz: 'Voqealarni tartib bilan aytib berdi',
							ru: 'Рассказал события по порядку',
							eng: 'Recounted events in order',
						},
						engagementLevel: 85,
					},
					{
						id: 'eng-4-3',
						image: 'https://example.com/eng4-3.png',
						time: '10:45',
						description: {
							uz: 'Xaritada joylarni ko‘rsatdi',
							ru: 'Показывал места на карте',
							eng: 'Pointed places on map',
						},
						engagementLevel: 88,
					},
					{
						id: 'eng-4-4',
						image: 'https://example.com/eng4-4.png',
						time: '10:55',
						description: {
							uz: 'Savol berdi',
							ru: 'Задал вопрос',
							eng: 'Asked a question',
						},
						engagementLevel: 82,
					},
				],
			},
			{
				id: 'lesson-10',
				name: 'geography',
				grade: 4,
				startTime: '11:10',
				endTime: '12:10',
				entryTime: '11:00',
				exitTime: '12:05',
				homeWork: 'Label continents on map',
				emotion: {
					happy: 70,
					sad: 10,
					neutral: 15,
					angry: 5,
				},
				engagement: [
					{
						id: 'eng-10-1',
						image: 'https://example.com/eng10-1.png',
						time: '11:20',
						description: {
							uz: 'Xaritada mamlakatlarni topdi',
							ru: 'Находил страны на карте',
							eng: 'Found countries on map',
						},
						engagementLevel: 84,
					},
					{
						id: 'eng-10-2',
						image: 'https://example.com/eng10-2.png',
						time: '11:40',
						description: {
							uz: 'Iqlim zonalarini muhokama qildi',
							ru: 'Обсуждал климатические зоны',
							eng: 'Discussed climate zones',
						},
						engagementLevel: 80,
					},
					{
						id: 'eng-10-3',
						image: 'https://example.com/eng10-3.png',
						time: '12:00',
						description: {
							uz: 'Faktlarni eslab qoldi',
							ru: 'Запоминал факты',
							eng: 'Memorized facts',
						},
						engagementLevel: 78,
					},
				],
			},
		],
	},
	{
		id: 'day-5',
		date: '19.12.2025',
		entryTime: '10:55',
		exitTime: '12:05',
		entryPhoto: 'https://example.com/entry-informatics.jpg',
		exitPhoto: 'https://example.com/exit-informatics.jpg',
		lessons: [
			{
				id: 'lesson-5',
				name: 'informatics',
				grade: 5,
				startTime: '11:00',
				endTime: '12:00',
				entryTime: '11:00',
				exitTime: '12:00',
				homeWork: 'Finish coding task',
				emotion: {
					happy: 80,
					sad: 5,
					neutral: 10,
					angry: 5,
				},

				engagement: [
					{
						id: 'eng-5',
						image: 'https://example.com/eng5.png',
						time: '11:45',
						description: {
							uz: 'Vazifani tez bajardi',
							ru: 'Быстро выполнил задание',
							eng: 'Completed task quickly',
						},
						engagementLevel: 95,
					},
					{
						id: 'eng-5-2',
						image: 'https://example.com/eng5-2.png',
						time: '11:15',
						description: {
							uz: 'Kod yozdi',
							ru: 'Писал код',
							eng: 'Wrote code',
						},
						engagementLevel: 92,
					},
					{
						id: 'eng-5-3',
						image: 'https://example.com/eng5-3.png',
						time: '11:30',
						description: {
							uz: 'Xatolarni tuzatdi',
							ru: 'Исправлял ошибки',
							eng: 'Fixed bugs',
						},
						engagementLevel: 90,
					},
					{
						id: 'eng-5-4',
						image: 'https://example.com/eng5-4.png',
						time: '11:55',
						description: {
							uz: 'Do‘stiga yordam berdi',
							ru: 'Помог однокласснику',
							eng: 'Helped classmate',
						},
						engagementLevel: 88,
					},
				],
			},
		],
	},
	{
		id: 'day-6',
		date: '20.12.2025',
		entryTime: '08:55',
		exitTime: '10:05',
		entryPhoto: 'https://example.com/entry-art.jpg',
		exitPhoto: 'https://example.com/exit-art.jpg',
		lessons: [
			{
				id: 'lesson-6',
				name: 'art',
				grade: 5,
				startTime: '09:00',
				endTime: '10:00',
				entryTime: '09:00',
				exitTime: '10:00',
				homeWork: 'Draw favorite place',
				emotion: {
					happy: 90,
					sad: 0,
					neutral: 10,
					angry: 0,
				},

				engagement: [
					{
						id: 'eng-6',
						image: 'https://example.com/eng6.png',
						time: '09:35',
						description: {
							uz: 'Ijodkorlik ko‘rsatdi',
							ru: 'Проявил креативность',
							eng: 'Showed creativity',
						},
						engagementLevel: 92,
					},
					{
						id: 'eng-6-2',
						image: 'https://example.com/eng6-2.png',
						time: '09:15',
						description: {
							uz: 'Rasm chizdi',
							ru: 'Рисовал активно',
							eng: 'Drew actively',
						},
						engagementLevel: 95,
					},
					{
						id: 'eng-6-3',
						image: 'https://example.com/eng6-3.png',
						time: '09:50',
						description: {
							uz: 'Ranglarni tanladi',
							ru: 'Выбирал цвета',
							eng: 'Chose colors',
						},
						engagementLevel: 90,
					},
					{
						id: 'eng-6-4',
						image: 'https://example.com/eng6-4.png',
						time: '09:58',
						description: {
							uz: 'Ishini ko‘rsatdi',
							ru: 'Показал свою работу',
							eng: 'Showed his work',
						},
						engagementLevel: 93,
					},
				],
			},
			{
				id: 'lesson-11',
				name: 'music',
				grade: 5,
				startTime: '10:10',
				endTime: '11:10',
				entryTime: '10:00',
				exitTime: '11:05',
				homeWork: 'Practice song at home',
				emotion: {
					happy: 88,
					sad: 0,
					neutral: 10,
					angry: 2,
				},
				engagement: [
					{
						id: 'eng-11-1',
						image: 'https://example.com/eng11-1.png',
						time: '10:20',
						description: {
							uz: "Qo'shiq kuyladi",
							ru: 'Пел песню',
							eng: 'Sang song',
						},
						engagementLevel: 90,
					},
					{
						id: 'eng-11-2',
						image: 'https://example.com/eng11-2.png',
						time: '10:40',
						description: {
							uz: 'Ritmni ushladi',
							ru: 'Держал ритм',
							eng: 'Kept rhythm',
						},
						engagementLevel: 88,
					},
					{
						id: 'eng-11-3',
						image: 'https://example.com/eng11-3.png',
						time: '11:00',
						description: {
							uz: 'Musiqa asbobida o‘ynadi',
							ru: 'Играл на музыкальном инструменте',
							eng: 'Played musical instrument',
						},
						engagementLevel: 92,
					},
				],
			},
		],
	},
]
