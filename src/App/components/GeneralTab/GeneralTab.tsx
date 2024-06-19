import React, { useEffect, useState } from 'react'

import LabledField from '../LabledField/LabledField';
import CustomInput from '../CustomInput/CustomInput';
import { IFormData, IInputData, TabProps } from '../../shared/types';
import CustomSelect from '../CustomSelect/CustomSelect';
import Scripts from '../../shared/utils/clientScripts';
import Masks from '../../shared/utils/masks';
import CustomInputDate from '../CustomInputDate/CustomInputDate';
import CustomInputAppItem from '../CustomInputAppItem/CustomInputAppItem';
import CustomInputSearch from '../CustomInputSearch/CustomInputSearch';
import { openContractorPage } from '../../shared/utils/utils';

/** Вкладка Общее ЛПУ */
function GeneralTab(props: TabProps) {
	const { handler, values, isViewMode, saveStateHandler, setActionHandlers } = props;

	// Установка обработчиков нажатия на кнопки действий в заголовке вкладок
	useEffect(() => {
		setActionHandlers.setAddHandler(undefined)
		setActionHandlers.setEditHandler(undefined)
		setActionHandlers.setDeleteHandler(undefined)
	}, [])

	/** Нажатие на контрагента */
	const onClickContractor = () => {
		saveStateHandler();
		const contractorId = values.lpu.data.code
		if (contractorId) openContractorPage(contractorId)
	}

	return (
		<div className='general-tab-lpu'>
			<div className="general-tab-lpu__columns">
				<div className="general-tab-lpu__column">
					<LabledField label={"Номер"}>
						<CustomInput isViewMode={isViewMode} name='number' inputHandler={handler} values={values} />
					</LabledField>
				</div>

				<div className="general-tab-lpu__column">
					<LabledField label={"ЛПУ"}>
						<CustomInputAppItem clickHandler={onClickContractor} href={Scripts.getSelectContractorPageLink()} saveStateHandler={saveStateHandler} isViewMode={isViewMode} name='lpu' inputHandler={handler} values={values} />
					</LabledField>
				</div>

				<div className="general-tab-lpu__column">
					<LabledField label={"Статус договора"}>
						<CustomSelect isViewMode={isViewMode} getDataHandler={Scripts.getStatuses} name='status' inputHandler={handler} values={values} />
					</LabledField>
				</div>
			</div>

			<div className="general-tab-lpu__columns">
				<div className="general-tab-lpu__column">
					<LabledField label={"Тип договора"}>
						<CustomSelect isViewMode={isViewMode} getDataHandler={Scripts.getStatuses} name='type' inputHandler={handler} values={values} />
					</LabledField>
				</div>

				<div className="general-tab-lpu__column">
					<LabledField label={"Дата заключения"}>
						<CustomInputDate isViewMode={isViewMode} name='conclusionDate' inputHandler={handler} values={values} />
					</LabledField>
				</div>

				<div className="general-tab-lpu__column">
					<LabledField label={"Дата начала действия"}>
						<CustomInputDate isViewMode={isViewMode} name='startDate' inputHandler={handler} values={values} />
					</LabledField>
				</div>

				<div className="general-tab-lpu__column">
					<LabledField label={"Дата окончания действия"}>
						<CustomInputDate isViewMode={isViewMode} name='endDate' inputHandler={handler} values={values} />
					</LabledField>
				</div>
			</div>
		</div>
	)
}

export default GeneralTab
