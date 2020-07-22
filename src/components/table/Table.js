import {createTable} from '@components/table/table.template'
import {ExcelComponent} from '@core/ExcelComponent'

export default class Table extends ExcelComponent {
    static className = 'excel__table'

    toHTML() {
        return createTable(50)
    }
}