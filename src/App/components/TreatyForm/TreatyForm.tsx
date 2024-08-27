import React, { useEffect, useState } from 'react';

import Panel from '../Panel/Panel';
import TabItem from '../TabItem/TabItem';
import TabsWrapper from '../TabsWrapper/TabsWrapper';
import GeneralTab from '../GeneralTab/GeneralTab';
import Button from '../Button/Button';
import { IFormData, IInputData, InsuredSearchData, TreatyFormData } from '../../shared/types';
import Scripts from '../../shared/utils/clientScripts';
import { localStorageDraftKey, localStorageIdKey } from '../../shared/utils/constants';
import SidesTab from '../SidesTab/SidesTab';
import { useMapState } from '../../shared/utils/utils';
import ProgramsTab from '../ProgramsTab/ProgramsTab';

/** Форма договора ЛПУ */
export default function TreatyForm() {

	const [isViewMode, setIsViewMode] = useState<boolean>(true);

	// Обработчик нажатия на кнопку добавить
	const [addHandler, setAddHandler] = useState<() => void>()
	// Обработчик нажатия на кнопку редактировать
	const [editHandler, setEditHandler] = useState<() => void>()
	// Обработчик нажатия на кнопку удалить
	const [deleteHandler, setDeleteHandler] = useState<() => void>()
	// Код активной вкладки
	const [activeTabCode, setActiveTabCode] = useState<string>()

	const setActionHandlers = {
		setAddHandler,
		setEditHandler,
		setDeleteHandler
	}

	const [values, setValue, setValues] = useMapState<IFormData>(new TreatyFormData());
	const [insuredValues, setInsuredValues] = useState<InsuredSearchData>(new InsuredSearchData());

	// Установка значения поля поиска застрахованного
	const setValueSearch = (name: string, value: IInputData) => {
		setInsuredValues({ ...insuredValues, [name]: value })
	}

	// Получение данных договора
	React.useLayoutEffect(() => {
		// Получение данных из черновика
		const draftData = localStorage.getItem(localStorageDraftKey)
		localStorage.removeItem(localStorageDraftKey)
		if (draftData) {
			const data = JSON.parse(draftData);

			setValues(data.values);
			setIsViewMode(data.isViewMode);
			setActiveTabCode(data.activeTabCode);

			return;
		}

		// Получение данных из Системы
		const dataPromise: Promise<IFormData> = Scripts.getTreatyLPU();
		dataPromise.then((data) => {
			setValues(data)
		})
	}, [])

	// Debug
	useEffect(() => {
		console.log(values)
	}, [values])

	/** Нажатие на кнопку Изменить */
	const onClickEdit = () => {
		setIsViewMode(false)
	}

	/** Нажатие на кнопку сохранить */
	const onClickSave = async () => {
		await Scripts.saveTreatyLPU(values);
		setIsViewMode(true)
	}

	/** Сохранить состояние в localStorage */
	const saveState = () => {
		const dataValues = values
		const dataIsViewMode = isViewMode;
		const dataActiveTabCode = activeTabCode;

		const data = JSON.stringify({
			values: dataValues,
			isViewMode: dataIsViewMode,
			activeTabCode: dataActiveTabCode
		})

		localStorage.setItem(localStorageDraftKey, data);

		localStorage.setItem(localStorageIdKey, values.treaty.data.code);
	}

	/** Кнопка Изменить или Сохранить взависимости от режима формы */
	const formActionButton = (
		isViewMode
			? <Button clickHandler={onClickEdit} buttonType='outline' title='ИЗМЕНИТЬ' />
			: <Button clickHandler={onClickSave} buttonType='outline' title='СОХРАНИТЬ' />
	)

	/** Заголовок панели */
	const panelLabel =
		values.number.value
			? `Договор ${values.number.value} от ${values.conclusionDate.value}`
			: "Новый договор"

	return (
		<>
			<div style={{ background: "#F2F4F6", padding: "10px", minHeight: "100%" }}>
				<Panel label={panelLabel} isRollable={false}>
					<TabsWrapper setActiveTabCodeGlobal={setActiveTabCode} activeTabCodeGlobal={activeTabCode} addHandler={addHandler} editHandler={editHandler} deleteHandler={deleteHandler}>
						<TabItem code={"general"} name={"Общее"} >
							<GeneralTab handler={setValue} values={values} isViewMode={isViewMode} saveStateHandler={saveState} setActionHandlers={setActionHandlers} />
						</TabItem>
						<TabItem code={"sides"} name={"Стороны"}>
							<SidesTab handler={setValue} values={values} isViewMode={isViewMode} saveStateHandler={saveState} setActionHandlers={setActionHandlers} />
						</TabItem>
						<TabItem code={"insurancePrograms"} name={"Мед.программы"}>
							<ProgramsTab handler={setValueSearch} values={values} isViewMode={isViewMode} saveStateHandler={saveState} setActionHandlers={setActionHandlers} />
						</TabItem>
						{/* <TabItem code={"files"} name={"Вложения"}>
							TODO
						</TabItem> */}
					</TabsWrapper>
					<div style={{ padding: "0 18px 18px 18px", textAlign: "right", display: "flex", gap: "18px", flexDirection: "row", justifyContent: "flex-end" }}>
						{formActionButton}
						<Button clickHandler={() => { }} title='ЗАКРЫТЬ' />
					</div>
				</Panel>
			</div>
		</>
	)
}
