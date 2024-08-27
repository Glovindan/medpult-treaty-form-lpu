import { DetailsProps, ListColumnData, ProgramDetailsData } from '../../../shared/types'

export class ProgramDetailsProps implements DetailsProps {
	data: any
	values: ProgramDetailsData
	setValue: (name: string, value: any) => void
	setValues: (values: ProgramDetailsData) => void
	columnsSettings: ListColumnData[]
	onClickRowHandler: () => any
	reloadData: () => void
	saveStateHandler: () => void
}
