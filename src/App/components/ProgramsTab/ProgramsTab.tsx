import React, { useEffect } from 'react';

import { IInputData, ListColumnData, ProgramDetailsData, TabProps, getDetailsLayoutAttributes } from '../../shared/types';
import Scripts from '../../shared/utils/clientScripts';
import CustomList from '../CustomList/CustomList';
import { openContractorPage, useMapState } from '../../shared/utils/utils';
import ProgramDetails from './ProgramDetails/ProgramDetails';

/** Вкладка Мед.Программы */
function ProgramsTab({ setActionHandlers, saveStateHandler }: TabProps) {

	// Установка обработчиков нажатия на кнопки действий в заголовке вкладок
	useEffect(() => {
		setActionHandlers.setAddHandler(undefined)
		setActionHandlers.setEditHandler(undefined)
		setActionHandlers.setDeleteHandler(undefined)
	}, [])

	/** Колонки списка */
	const columns = [
		new ListColumnData({ name: "Номер", code: "number", fr: 0.5, isSortable: true }),
		new ListColumnData({ name: "Тип", code: "type", fr: 0.5, isSortable: true }),
		new ListColumnData({ name: "Признак", code: "attribute", fr: 0.5, isSortable: true }),
		new ListColumnData({ name: "Наименование", code: "name", fr: 1, isSortable: true }),
		new ListColumnData({ name: "Маркетинговое наименование", code: "marketingName", fr: 1, isSortable: true }),
		new ListColumnData({ name: "Дата начала", code: "startDate", fr: 0.5, isSortable: true }),
		new ListColumnData({ name: "Дата окончания", code: "endDate", fr: 0.5, isSortable: true }),
		new ListColumnData({ name: "Уровень", code: "level", fr: 0.5, isSortable: true }),
		new ListColumnData({ name: "Возраст", code: "age", fr: 0.5, isSortable: true }),
	]

	// Данные формы деталей программы
	const [programValues, setProgramValue, setProgramValues] = useMapState<ProgramDetailsData>(new ProgramDetailsData());

	/** Получение формы детальной информации по строке списка Планов страхования */
	const getPlanDetailsLayout = ({ rowData, reloadData, onClickRowHandler }: getDetailsLayoutAttributes) => {
		return <ProgramDetails saveStateHandler={saveStateHandler} reloadData={reloadData} columnsSettings={columns} data={rowData} values={programValues} setValue={setProgramValue} setValues={setProgramValues} onClickRowHandler={onClickRowHandler} />
	}

	return (
		<div className="plans-tab">
			<div className="plans-tab__list">
				<CustomList columnsSettings={columns} getDataHandler={Scripts.getProgramsLPU} getDetailsLayout={getPlanDetailsLayout} isScrollable={false} />
			</div>
		</div>
	)
}

export default ProgramsTab
