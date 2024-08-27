import React, { useState } from 'react';
import Scripts from '../../../../shared/utils/clientScripts';
import CustomInput from '../../../CustomInput/CustomInput';
import LabledField from '../../../LabledField/LabledField';
import Button from '../../../Button/Button';
import { ProgramDetailsProps } from '../ProgramDetailsTypes';
import ProgramDetailsList from '../ProgramDetailsList/ProgramDetailsList';
import CustomInputDate from '../../../CustomInputDate/CustomInputDate';
import CustomSelect from '../../../CustomSelect/CustomSelect';
import { IInputData } from '../../../../shared/types';

/** Форма редактирования/просмотра программы страхования */
function ProgramDetailsLayout(props: ProgramDetailsProps) {
	const { data, values, setValue, onClickRowHandler, reloadData } = props;
	const [isViewMode, setIsViewMode] = useState<boolean>(true);

	/** Нажатие на кнопку Изменить */
	const onClickEdit = () => {
		setIsViewMode(false)
	}

	/** Нажатие на кнопку сохранить */
	const onClickSave = async () => {
		await Scripts.saveProgram(data.id, values);
		setIsViewMode(true)
		reloadData()
	}

	const formActionButton = (
		isViewMode
			? <Button clickHandler={onClickEdit} buttonType='outline' title='ИЗМЕНИТЬ' />
			: <Button clickHandler={onClickSave} buttonType='outline' title='СОХРАНИТЬ' />
	)

	return (
		<div className="program-details-layout">
			{/* Поля */}
			<div className="program-details-layout__fields">
				<LabledField label={"Дата начала действия"}>
					<CustomInputDate isViewMode={isViewMode} name='startDate' inputHandler={setValue} values={values} />
				</LabledField>
				<LabledField label={"Дата окончания действия"}>
					<CustomInputDate isViewMode={isViewMode} name='endDate' inputHandler={setValue} values={values} />
				</LabledField>
				<LabledField label={"Тип клиента"}>
					<CustomSelect isViewMode={isViewMode} name='clientType' inputHandler={setValue} values={values} getDataHandler={Scripts.getClientTypes} />
				</LabledField>
				<LabledField label={"Уровень мед. программы"}>
					<CustomSelect isViewMode={isViewMode} name='level' inputHandler={setValue} values={values} getDataHandler={Scripts.getLevels} />
				</LabledField>
			</div>
			{/* Список ТОУ */}
			<div className="program-details-layout__list">
				<ProgramDetailsList {...props} />
			</div>
			{/* Кнопки действий */}
			<div className="program-details-layout__buttons">
				{/* Кнопка изменить/сохранить */}
				{formActionButton}
				{/* Кнопка закрыть */}
				<Button clickHandler={onClickRowHandler} title='ЗАКРЫТЬ' />
			</div>
		</div>
	)
}

export default ProgramDetailsLayout

