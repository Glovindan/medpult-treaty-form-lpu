// /** Тип категория/элемент приложения */
// export interface ICategory {
// 	/** Код или идетификатор */
// 	code: string
// 	/** Название */
// 	name: string
// }

export interface IInputData {
	value: string
	data?: any
}

/** Значения полей формы ЛПУ */
export interface IFormData {
	/** Договор */
	treaty: IInputData
	/** Номер */
	number: IInputData
	/** ЛПУ */
	lpu: IInputData
	/** Тип договора */
	type: IInputData
	/** Статус */
	status: IInputData
	/** Дата заключения */
	conclusionDate: IInputData
	/** Дата начала действия */
	startDate: IInputData
	/** Дата окончания действия */
	endDate: IInputData
	/** Стороны */
	sides: SideDataExtended[]
}

/** Данные столбца таблицы */
export class ListColumnData {
	/** Коэффициент соотношения ширины столбца */
	fr: number
	/** Можно ли по этому столбцу сортировать */
	isSortable: boolean
	/** Хранит ли по столбец ссылки */
	isLink: boolean
	/** Название столбца */
	name: string
	/** Код значения */
	code: string
	/** Обработчик нажатия */
	onClick?: (props: any) => any

	constructor({
		name,
		code,
		fr,
		isSortable,
		isLink,
		onClick,
	}: {
		name: string
		code: string
		fr?: number
		isSortable?: boolean
		isLink?: boolean
		onClick?: (props: any) => any
	}) {
		this.fr = fr ?? 1
		this.isSortable = isSortable ?? false
		this.isLink = isLink ?? false

		if (onClick) this.onClick = onClick

		this.name = name
		this.code = code
	}
}

export interface CustomInputProps extends React.ComponentProps<'input'> {
	values: { [key: string]: any }
	name: string
	buttons?: any
	inputHandler?: (name: string, value: IInputData) => void
	clickHandler?: (ev) => void
	cursor?: string
	isOpen?: boolean
	wrapperRef?: React.RefObject<HTMLDivElement>
	readOnly?: boolean
	isViewMode?: boolean
	placeholder?: string
	maskFunction?: (value: string) => string
	getValueHandler?: (props: CustomInputProps) => string
	isInvalid?: boolean
	customClassname?: string
}

/** Сторона (С сохранением изначального состояния данных) */
export class SideDataExtended {
	originalData: SideData
	actualData: SideData
	isEdit: boolean

	constructor(isEdit?: boolean) {
		// this.isEdit = !!isEdit
		this.originalData = new SideData()
		this.actualData = new SideData()
		this.isEdit = !!isEdit
	}
}

/** Сторона */
export class SideData {
	type: InputDataCategory
	contractor: InputDataString
	// isEdit: boolean

	constructor(/* isEdit?: boolean */) {
		// this.isEdit = !!isEdit
		this.type = new InputDataCategory()
		this.contractor = new InputDataString()
	}
}

/** Значение поля ввода типа Строка */
export class InputDataString implements IInputData {
	value: string
	data: null

	constructor(value?: string) {
		this.value = value ?? ''
	}
}

/** Значение поля ввода типа Категория */
export class InputDataCategory implements IInputData {
	value: string
	data: {
		code: string
	}

	constructor(value?: string, code?: string) {
		this.value = value ?? ''
		this.data = { code: code ?? '' }
	}
}

/** Значения полей формы ЛПУ с уточненными типами полей */
export class TreatyFormData implements IFormData {
	treaty: IInputData
	number: IInputData
	lpu: IInputData
	status: IInputData
	conclusionDate: IInputData
	startDate: IInputData
	endDate: IInputData
	sides: SideDataExtended[]
	type: IInputData

	constructor() {
		this.treaty = new InputDataCategory()
		this.status = new InputDataCategory()

		this.number = new InputDataString()
		this.lpu = new InputDataString()
		this.conclusionDate = new InputDataString()
		this.startDate = new InputDataString()
		this.endDate = new InputDataString()
		this.type = new InputDataString()
		this.sides = []
	}
}

/** Значение поискового запроса */
export class InsuredSearchData {
	/** Категория */
	category: InputDataCategory

	/** ФИО */
	fullname: InputDataString
	/** Дата рождения */
	birthDate: InputDataString
	/** Номер полиса */
	policyNumber: InputDataString
	/** Дата начала */
	startDate: InputDataString
	/** Дата окончания */
	endDate: InputDataString
	/** План */
	plan: InputDataString
	/** ДС */
	additionalAgreement: InputDataString

	constructor() {
		this.category = new InputDataCategory()
		this.fullname = new InputDataString()
		this.birthDate = new InputDataString()
		this.policyNumber = new InputDataString()
		this.startDate = new InputDataString()
		this.endDate = new InputDataString()
		this.plan = new InputDataString()
		this.additionalAgreement = new InputDataString()
	}
}

/** Данные сортировки */
export class SortData {
	code: string
	isAscending: boolean

	constructor({ code, isAscending }: { code?: string; isAscending?: boolean }) {
		this.code = code ?? ''
		this.isAscending = isAscending ?? true
	}
}

export interface TabProps {
	handler: any
	values: IFormData
	isViewMode: boolean
	saveStateHandler: () => void
	setActionHandlers: {
		setAddHandler: React.Dispatch<React.SetStateAction<(() => void) | undefined>>
		setEditHandler: React.Dispatch<React.SetStateAction<(() => void) | undefined>>
		setDeleteHandler: React.Dispatch<React.SetStateAction<(() => void) | undefined>>
	}
}

export interface DetailsProps {
	data: any
	values: any
}

/** Атрибуты функции получения разметки деталей строки динамического списка */
export interface getDetailsLayoutAttributes {
	/** Сокращенные данные строки */
	rowData: any
	/** Обработчик нажатия на строку */
	onClickRowHandler: any
	/** Перезагрузка списка */
	reloadData: () => void
}

/** Детальные данные Плана страхования */
export class PlanDetailsData {
	/** Номер */
	planNumber: InputDataString
	/** Дата начала */
	startDate: InputDataString
	/** Дата окончания */
	endDate: InputDataString
	/** Тип ЗХ */
	insuranceType: InputDataCategory

	/** Возрастной коэффициент */
	ageFactor: InputDataString

	/** Возраст, от */
	startAge: InputDataString
	/** Единица измерения возраста от */
	startAgeMeasurement: InputDataString
	/** Возраст, до */
	endAge: InputDataString
	/** Единица измерения возраста, до */
	endAgeMeasurement: InputDataString

	/** Страховая премия по плану на 1 ЗХ, год */
	insurancePremium: InputDataString
	/** Наименование */
	name: InputDataString
	/** Предыдущий план */
	previousPlan: InputDataString
	/** Коэффициент на родственника */
	relativeFactor: InputDataString
	/** Страховая сумма по плану на 1 ЗХ, год */
	insuranceAmount: InputDataString
	/** Тип плана */
	type: InputDataString
	/** Родительский план */
	parentPlan: InputDataString
	/** Основной регион */
	region: InputDataString
	/** Медицинский коэффициент */
	medicalFactor: InputDataString

	constructor() {
		this.planNumber = new InputDataString()
		this.startDate = new InputDataString()
		this.endDate = new InputDataString()
		this.insuranceType = new InputDataCategory()
		this.ageFactor = new InputDataString()
		this.startAge = new InputDataString()
		this.startAgeMeasurement = new InputDataString()
		this.endAge = new InputDataString()
		this.endAgeMeasurement = new InputDataString()
		this.insurancePremium = new InputDataString()
		this.name = new InputDataString()
		this.previousPlan = new InputDataString()
		this.relativeFactor = new InputDataString()
		this.insuranceAmount = new InputDataString()
		this.type = new InputDataString()
		this.parentPlan = new InputDataString()
		this.region = new InputDataString()
		this.medicalFactor = new InputDataString()
	}
}

/** Детальные данные Программы страхования */
export class ProgramDetailsData {
	/** Номер */
	number: InputDataString
	/** Тип клиента */
	clientType: InputDataCategory
	/** Дата начала */
	startDate: InputDataString
	/** Дата окончания */
	endDate: InputDataString
	/** Уровень */
	level: InputDataCategory

	// /** Тип */
	// type: InputDataCategory
	// /** Признак */
	// attribute: InputDataString
	// /** Наименование */
	// name: InputDataString
	// /** Маркетинговое наименование */
	// marketingName: InputDataString
	// /** Возраст */
	// age: InputDataString

	constructor() {
		this.number = new InputDataString()
		this.startDate = new InputDataString()
		this.endDate = new InputDataString()
		this.level = new InputDataCategory()
		// this.type = new InputDataCategory()
		// this.attribute = new InputDataString()
		// this.name = new InputDataString()
		// this.marketingName = new InputDataString()
		// this.age = new InputDataString()
	}
}
