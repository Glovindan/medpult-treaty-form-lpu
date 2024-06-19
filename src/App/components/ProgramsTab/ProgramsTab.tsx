import React, { useEffect } from 'react';

import { ListColumnData, PlanDetailsData, TabProps, getDetailsLayoutAttributes } from '../../shared/types';
import Scripts from '../../shared/utils/clientScripts';
import CustomList from '../CustomList/CustomList';
import { useMapState } from '../../shared/utils/utils';
import PlanDetails from './PlanDetails/PlanDetails';

/** Вкладка Мед.Программы */
function ProgramsTab({ values, setActionHandlers, saveStateHandler }: TabProps) {

	// Установка обработчиков нажатия на кнопки действий в заголовке вкладок
	useEffect(() => {
		setActionHandlers.setAddHandler(undefined)
		setActionHandlers.setEditHandler(undefined)
		setActionHandlers.setDeleteHandler(undefined)
	}, [])

	/** Колонки списка */
	const columns = [
		new ListColumnData({ name: "Номер", code: "number", fr: 1, isSortable: true }),
		new ListColumnData({ name: "Тип", code: "title", fr: 0.5, isSortable: true }),
		new ListColumnData({ name: "Признак", code: "title", fr: 1, isSortable: true }),
		new ListColumnData({ name: "Наименование", code: "age", fr: 1, isSortable: true }),
		new ListColumnData({ name: "Маркетинговое наименование", code: "startDate", fr: 1, isSortable: true }),
		new ListColumnData({ name: "Дата начала", code: "endDate", fr: 0.5, isSortable: true }),
		new ListColumnData({ name: "Дата окончания", code: "endDate", fr: 0.5, isSortable: true }),
		new ListColumnData({ name: "Уровень", code: "parentPlan", fr: 1, isSortable: true }),
		new ListColumnData({ name: "Возраст", code: "additionalAgreement", fr: 0.5, isSortable: true }),
	]

	// Данные формы деталей программы
	const [programValues, setProgramValue, setProgramValues] = useMapState<PlanDetailsData>(new PlanDetailsData());

	/** Получение формы детальной информации по строке списка Планов страхования */
	const getPlanDetailsLayout = ({ rowData, reloadData, onClickRowHandler }: getDetailsLayoutAttributes) => {
		return <PlanDetails reloadData={reloadData} columnsSettings={columns} data={rowData} values={programValues} setValue={setProgramValue} setValues={setProgramValues} onClickRowHandler={onClickRowHandler} />
	}

	return (
		<div className="plans-tab">
			<div className="plans-tab__list">
				<CustomList columnsSettings={columns} getDataHandler={Scripts.getPlans} getDetailsLayout={getPlanDetailsLayout} isScrollable={false} />
			</div>
		</div>
	)
}

export default ProgramsTab
