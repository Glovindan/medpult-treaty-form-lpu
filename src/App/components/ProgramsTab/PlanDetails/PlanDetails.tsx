import React from 'react';
import { DetailsProps, ListColumnData, PlanDetailsData } from '../../../shared/types';

class PlanDetailsProps implements DetailsProps {
	data: any;
	values: PlanDetailsData;
	setValue: (name: string, value: any) => void
	setValues: (values: PlanDetailsData) => void
	columnsSettings: ListColumnData[];
	onClickRowHandler: () => any
	reloadData: () => void
}

/** Форма редактирования/просмотра плана страхования */
function PlanDetails({ data, values, setValue, setValues, columnsSettings, onClickRowHandler, reloadData }: PlanDetailsProps) {

	return (
		<>
		</>
	)
}

export default PlanDetails

