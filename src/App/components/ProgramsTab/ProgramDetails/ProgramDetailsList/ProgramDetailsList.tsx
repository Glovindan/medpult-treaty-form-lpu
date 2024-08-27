import React from 'react';
import { ProgramDetailsProps } from '../ProgramDetailsTypes';
import { IInputData, ListColumnData, SortData } from '../../../../shared/types';
import CustomList from '../../../CustomList/CustomList';
import Scripts from '../../../../shared/utils/clientScripts';
import { openContractorPage } from '../../../../shared/utils/utils';

/** Список ТОУ */
function ProgramDetailsList({ data, saveStateHandler }: ProgramDetailsProps) {
	/** Обработчик нажатия на ТОУ */
	const clickTouHandler = (data: IInputData) => {
		const contractorId = data.data.code
		saveStateHandler();
		if (contractorId) openContractorPage(contractorId)
	}

	/** Колонки списка программ */
	const columns = [
		new ListColumnData({ name: "Наименование", code: "name", fr: 1, isSortable: true, isLink: true, onClick: clickTouHandler }),
		new ListColumnData({ name: "Адрес", code: "address", fr: 1, isSortable: true }),
	]

	/** Получение ТОУ по идентификатору программы */
	const getTOU = (page: number, sortData: SortData) => {
		return Scripts.getTOU(data.id, sortData);
	}

	return (
		<div className="program-details-list">
			<div className="program-details-list__header">
				<span>ТОУ</span>
			</div>
			<div className="program-details-list__table">
				<CustomList columnsSettings={columns} getDataHandler={getTOU} isScrollable={true} />
			</div>
		</div>
	)
}

export default ProgramDetailsList

