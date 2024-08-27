import { InputDataString } from '../types'

/** Заглушка ожидания ответа сервера */
function randomDelay() {
	const delay = Math.random() * 1000
	return new Promise((resolve) => {
		setTimeout(resolve, delay)
	})
}

/** Получение списка продуктов */
async function getProducts() {
	const data = [
		{
			'value': 'placeholder 1',
			'data': {
				'code': '018e7fa6-010e-712b-aecd-d07441142e97',
			},
		},
		{
			'value': 'placeholder 2',
			'data': {
				'code': '018e7fa6-46b6-7345-927e-d07cb06e3107',
			},
		},
		{
			'value': 'placeholder 3',
			'data': {
				'code': '018e7fa6-5a9f-7ee2-a81c-1b7ec10031f3',
			},
		},
	]

	await randomDelay()
	return data
}

/** Получение списка каналов */
async function getChannels() {
	const data = [
		{
			'value': 'СБОЛ',
			'data': {
				'code': '018e7fa6-010e-712b-aecd-d07441142e97',
			},
		},
		{
			'value': 'БУБУБУ',
			'data': {
				'code': '018e7fa6-46b6-7345-927e-d07cb06e3107',
			},
		},
		{
			'value': 'ВСТАВИТЬ ТЕКСТ',
			'data': {
				'code': '018e7fa6-5a9f-7ee2-a81c-1b7ec10031f3',
			},
		},
	]

	await randomDelay()
	return data
}

/** Получение списка валют */
async function getCurrencies() {
	const data = [
		{
			'value': 'RUB',
			'data': {
				'code': '018e7fa6-010e-712b-aecd-d07441142e97',
			},
		},
		{
			'value': 'USD',
			'data': {
				'code': '018e7fa6-46b6-7345-927e-d07cb06e3107',
			},
		},
		{
			'value': 'EUR',
			'data': {
				'code': '018e7fa6-5a9f-7ee2-a81c-1b7ec10031f3',
			},
		},
	]

	await randomDelay()
	return data
}

/** Получение списка статусов */
async function getStatuses() {
	const data = [
		{
			'value': 'RUB',
			'data': {
				'code': '018e7fa6-010e-712b-aecd-d07441142e97',
			},
		},
		{
			'value': 'USD',
			'data': {
				'code': '018e7fa6-46b6-7345-927e-d07cb06e3107',
			},
		},
		{
			'value': 'EUR',
			'data': {
				'code': '018e7fa6-5a9f-7ee2-a81c-1b7ec10031f3',
			},
		},
	]

	await randomDelay()
	return data
}

/** Сохранение договора */
async function saveTreaty(data) {
	await randomDelay()
	console.log(data)
}

/** Сохранение договора ЛПУ */
async function saveTreatyLPU(data) {
	await randomDelay()
	console.log(data)
}

/** Получение договоров ЛПУ */
async function getTreatyLPU() {
	const data = {
		'treaty': {
			'value': 'test',
			'data': {
				'code': '018e7fa6-5a9f-7ee2-a81c-1b7ec10031f3',
			},
		},
		'number': {
			'value': 'test',
		},
		'lpu': {
			'value': 'test',
			'data': {
				'code': '018e7fa6-5a9f-7ee2-a81c-1b7ec10031f3',
			},
		},
		'status': {
			'value': 'Еще статус',
			'data': {
				'code': 'eshe_status',
			},
		},
		'type': {
			'value': 'Еще статус',
			'data': {
				'code': 'eshe_status',
			},
		},
		'conclusionDate': {
			'value': '28.03.2024',
		},
		'startDate': {
			'value': '28.03.2024',
		},
		'endDate': {
			'value': '28.03.2024',
		},
		'sides': [
			{
				'isEdit': false,
				'originalData': {
					'type': {
						'value': 'Менеджер договора',
						'data': {
							'code': 'manager',
						},
					},
					'contractor': {
						'value': 'Иванов Иван Иванович',
					},
				},
				'actualData': {
					'type': {
						'value': 'Менеджер договора',
						'data': {
							'code': 'manager',
						},
					},
					'contractor': {
						'value': 'Иванов Иван Иванович',
					},
				},
			},
			{
				'isEdit': false,
				'originalData': {
					'type': {
						'value': 'Медицинский куратор',
						'data': {
							'code': 'medical',
						},
					},
					'contractor': {
						'value': 'Петров Петр Петрович',
					},
				},
				'actualData': {
					'type': {
						'value': 'Медицинский куратор',
						'data': {
							'code': 'medical',
						},
					},
					'contractor': {
						'value': 'Петров Петр Петрович',
					},
				},
			},
			{
				'isEdit': true,
				'originalData': {
					'type': {
						'value': 'Технический куратор',
						'data': {
							'code': 'technical',
						},
					},
					'contractor': {
						'value': 'Плюшкин Лев Николаевич',
					},
				},
				'actualData': {
					'type': {
						'value': 'Технический куратор',
						'data': {
							'code': 'technical',
						},
					},
					'contractor': {
						'value': 'Плюшкин Лев Николаевич',
					},
				},
			},
		],
	}
	await randomDelay()
	return data
}

/** Получение прпограмм страхования для договоров ЛПУ */
async function getProgramsLPU(page) {
	const mockData = {
		'number': {
			'value': 'МР000044/22',
			'data': {
				'code': 'test',
			},
		},
		'type': {
			'value': 'Фкт типовая',
			'data': {
				'code': 'test',
			},
		},
		'attribute': {
			'value': 'Базовая',
			'data': {
				'code': 'test',
			},
		},
		'name': {
			'value': 'АПП18+V1',
			'data': {
				'code': 'test',
			},
		},
		'marketingName': {
			'value': 'АПП18+V1',
			'data': {
				'code': 'test',
			},
		},
		'startDate': {
			'value': '01.03.2022',
			'data': {
				'code': 'test',
			},
		},
		'endDate': {
			'value': '28.02.2027',
			'data': {
				'code': 'test',
			},
		},
		'level': {
			'value': 'Стандарт',
			'data': {
				'code': 'test',
			},
		},
		'age': {
			'value': 'от 18 лет до 100 лет',
			'data': {
				'code': 'test',
			},
		},
	}

	await randomDelay()
	return {
		data: Array(20)
			.fill()
			.map((data, index) => {
				return { ...mockData, 'id': index }
			}),
		hasMore: false,
	}
}

/** Получение полных данных программы по идентификатору */
async function getProgramFulldata(id) {
	console.trace(id)

	const data = {
		'startDate': {
			'value': '10.01.2024',
		},
		'endDate': {
			'value': '31.12.2024',
		},
		'clientType': {
			'value': 'tetete',
			'data': {
				'code': 'saaaa',
			},
		},
		'level': {
			'value': 'tesfasf',
			'data': {
				'code': 'dsad',
			},
		},
	}

	return data
}

/** Сохранение Программы страхования */
async function saveProgram(id, values) {
	console.trace({ id, values })
}
/** Получение ТОУ */
async function getTOU(programId, sortData) {
	console.trace({ programId, sortData })

	const mockData = {
		'name': {
			'value': 'Поликлиника №1',
			'data': {
				'code': 'test',
			},
		},
		'address': {
			'value': 'Россия, 101000, Москва, Сретенский бульвар, дом 6/1, стр 2',
		},
	}

	return {
		data: Array(20)
			.fill()
			.map((data, index) => {
				return { ...mockData, 'id': index }
			}),
		hasMore: false,
	}
}

/** Получение Типов клиента */
async function getClientTypes() {
	const data = [
		{
			'value': 'lorem',
			'data': {
				'code': '018e7fa6-010e-712b-aecd-d07441142e97',
			},
		},
		{
			'value': 'ipsum',
			'data': {
				'code': '018e7fa6-46b6-7345-927e-d07cb06e3107',
			},
		},
		{
			'value': 'dolor',
			'data': {
				'code': '018e7fa6-5a9f-7ee2-a81c-1b7ec10031f3',
			},
		},
	]

	return data
}

/** Получение Уровней программы */
async function getLevels() {
	const data = [
		{
			'value': '1',
			'data': {
				'code': '018e7fa6-010e-712b-aecd-d07441142e97',
			},
		},
		{
			'value': '2',
			'data': {
				'code': '018e7fa6-46b6-7345-927e-d07cb06e3107',
			},
		},
		{
			'value': '3',
			'data': {
				'code': '018e7fa6-5a9f-7ee2-a81c-1b7ec10031f3',
			},
		},
	]

	return data
}

/** Получение ссылки на форму отбора контрагента */
const getSelectContractorPageLink = () => {
	const pageLink = '#test'
	return pageLink + '?field_id=medpult-treaty-policy-holder'
}

/** Получение ссылки на форму отбора контрагента (Для выбора ответственного лица) */
function getSelectContractorPageLinkResponsible(index) {
	const pageLink = '#test'
	return pageLink + `?field_id=medpult-treaty-responsible&&index=${index}`
}

/** Получение ссылки на форму контрагента */
function getContractorPageLink() {
	const pageLink = '#test'
	return pageLink
}

/** Получение подсказок по адресу */
const getAddressSuggestion = async (value) => {
	const addresses = [
		{
			'value': 'г Полный адрес, улица Полная, д12 кв34',
			'isFull': true,
		},
		{
			'value': 'г Неполный адрес',
			'isFull': false,
		},
	]
	await randomDelay()
	return addresses
}

/** Получение типов ответственного лица */
const getResponsibleTypes = async (value) => {
	const types = [
		{
			'value': 'Менеджер договора',
			'data': {
				'code': 'manager',
			},
		},
		{
			'value': 'Медицинский куратор',
			'data': {
				'code': 'medical',
			},
		},
		{
			'value': 'Технический куратор',
			'data': {
				'code': 'technical',
			},
		},
	]
	await randomDelay()
	return types
}

/** Получение контрагентов */
const getContractors = async (page) => {
	const mockData = {
		'id': '1',
		'fullname': {
			'value': 'Иванов Иван Иванович',
			'data': {
				'code': 'test',
			},
		},
		'birthDate': {
			'value': '22.22.2222',
		},
		'policyNumber': {
			'value': '22.22.2222',
		},
		'category': {
			'value': 'Gold',
			'data': {
				'code': 'test',
			},
		},
		'startDate': {
			'value': '22.22.2222',
		},
		'endDate': {
			'value': '22.22.2222',
		},
		'plan': {
			'value': 'ОНКО-ТКМ-МИР-Г-0-17',
		},
		'additionalAgreement': {
			'value': '001СБС00123456/2023ДМС-00',
		},
	}

	await randomDelay()
	return {
		data: Array(20)
			.fill()
			.map((data, index) => {
				return { ...mockData, 'id': index }
			}),
		hasMore: true,
	}
}

/** Получение планов страхования */
const getPlans = async (page) => {
	const mockData = {
		'number': {
			'value': 'План 12345',
			'data': {
				'code': 'test',
			},
		},
		'title': {
			'value': 'ОНКО-ТКМ-МИР-Г-0-17',
		},
		'type': {
			'value': 'Родительский',
			'data': {
				'code': 'parent',
			},
		},
		'age': {
			'value': 'от 18 до 48 лет',
		},
		'startDate': {
			'value': '22.22.2222',
		},
		'endDate': {
			'value': '22.22.2222',
		},
		'parentPlan': {
			'value': 'ОНКО-ТКМ-МИР-Г-0-17',
			'data': {
				'code': 'test',
			},
		},
		'additionalAgreement': {
			'value': '001СБС00123456/2023ДМС',
		},
	}

	await randomDelay()
	return {
		data: Array(20)
			.fill()
			.map((data, index) => {
				return { ...mockData, 'id': index }
			}),
		hasMore: false,
	}
}

/** Получение программ по идентификатору плана */
async function getPrograms(planId, sortData) {
	await randomDelay()

	return {
		data: [
			{
				'number': {
					'value': 'IP000169/23',
				},
				'title': {
					'value': 'Онко ТКМ',
				},
				'marketingTitle': {
					'value': 'Лечение онкологии и трансплантация костного мозга',
				},
			},
			{
				'number': {
					'value': 'IP000169/22',
				},
				'title': {
					'value': 'Онко ТКМ',
				},
				'marketingTitle': {
					'value': 'Лечение онкологии',
				},
			},
		],
		hasMore: false,
	}
}

/** Получить единицы измерения возраста */
async function getAgeMeasurements() {
	return [new InputDataString('лет'), new InputDataString('мес')]
}

/** Получение полных данных плана по идентификатору */
async function getPlanFulldata(id) {
	const data = {
		'planNumber': {
			'value': 'План 654321',
		},
		'startDate': {
			'value': '10.01.2024',
		},
		'endDate': {
			'value': '31.12.2024',
		},
		'insuranceType': {
			'value': '',
			'data': {
				'code': '',
			},
		},
		'ageFactor': {
			'value': '',
		},
		'startAge': {
			'value': '0',
		},
		'startAgeMeasurement': {
			'value': 'лет',
			'data': {},
		},
		'endAge': {
			'value': '17',
		},
		'endAgeMeasurement': {
			'value': 'лет',
			'data': {},
		},
		'insurancePremium': {
			'value': '820,22',
		},
		'name': {
			'value': 'ОНКО-ТКМ-МИР-Г-0-18',
		},
		'previousPlan': {
			'value': '',
		},
		'relativeFactor': {
			'value': '',
		},
		'insuranceAmount': {
			'value': '26000000,00',
		},
		'type': {
			'value': '',
		},
		'parentPlan': {
			'value': '',
		},
		'region': {
			'value': 'г Полный адрес, улица Полная, д12 кв34',
			'data': {
				'isFull': true,
			},
		},
		'medicalFactor': {
			'value': '',
		},
	}

	await randomDelay()
	return data
}

/** Получение типов ЗХ */
async function getInsuranceTypes() {
	const data = [new InputDataString('Дети, Взрослые')]

	await randomDelay()
	return data
}

/** Получение типов плана */
async function getPlanTypes() {
	const data = [new InputDataString('Индивидуальный'), new InputDataString('Родительский')]

	await randomDelay()
	return data
}

/** Получение Родительских планов */
async function getParentPlans() {
	const data = [new InputDataString('ОНКО-ТКМ-МИР-Г-0-17')]

	await randomDelay()
	return data
}

/** Сохранение Плана страхования */
async function savePlan(id, values) {
	await randomDelay()
}

/** Получение типов договора */
async function getContractTypes() {
	const data = [
		{
			'value': 'RUB',
			'data': {
				'code': '018e7fa6-010e-712b-aecd-d07441142e97',
			},
		},
		{
			'value': 'USD',
			'data': {
				'code': '018e7fa6-46b6-7345-927e-d07cb06e3107',
			},
		},
		{
			'value': 'EUR',
			'data': {
				'code': '018e7fa6-5a9f-7ee2-a81c-1b7ec10031f3',
			},
		},
	]

	await randomDelay()
	return data
}

/** Получение ссылки на форму отбора контрагента (Для выбора ЛПУ) */
function getSelectLPULink() {
	const pageLink = '#test'
	return pageLink + '?field_id=medpult-treaty-lpu'
}

export default {
	getProducts,
	getChannels,
	getCurrencies,
	getStatuses,
	saveTreaty,
	// getTreaty,
	getSelectContractorPageLink,
	getSelectContractorPageLinkResponsible,
	getSelectLPULink,
	getAddressSuggestion,
	getResponsibleTypes,
	getContractors,
	getContractorPageLink,
	getPlans,
	savePlan,
	getPrograms,
	getAgeMeasurements,
	getPlanFulldata,
	getInsuranceTypes,
	getPlanTypes,
	getParentPlans,
	saveTreatyLPU,
	getTreatyLPU,
	getProgramsLPU,
	getProgramFulldata,
	getTOU,
	saveProgram,
	getClientTypes,
	getLevels,
	getContractTypes,
}
