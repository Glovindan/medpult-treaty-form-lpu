import React, { useState } from 'react';
import CustomListRow from '../../CustomList/CustomListRow/CustomListRow';
import Loader from '../../Loader/Loader';
import Scripts from '../../../shared/utils/clientScripts';
import { ProgramDetailsProps } from './ProgramDetailsTypes';
import ProgramDetailsLayout from './ProgramDetailsLayout/ProgramDetailsLayout';

/** Обертка формы программы */
function ProgramDetails(props: ProgramDetailsProps) {
	const { data, columnsSettings, setValues, onClickRowHandler } = props;
	const [isLoading, setIsLoading] = useState<boolean>(false);

	React.useLayoutEffect(() => {
		setIsLoading(true)
		// Получить полные данные по data.id 
		Scripts.getProgramFulldata(data.id).then(fullData => {
			setIsLoading(false)
			// Присвоить полные данные в состояние
			setValues(fullData as any)
		})
	}, [])

	return (
		<>
			<div className="plan-details">
				{/* Строка таблицы */}
				<CustomListRow
					data={data}
					columnsSettings={columnsSettings}
					setOpenRowIndex={onClickRowHandler}
					isClickable
					isOpen
					reloadData={function () { }}
				/>

				{/* Форма программы */}
				{isLoading ? < Loader /> : <ProgramDetailsLayout {...props} />}
			</div>
		</>
	)
}

export default ProgramDetails

