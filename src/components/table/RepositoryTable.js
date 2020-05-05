import React from 'react'
import {Table} from 'antd'
import Styles from './Styles'
import Moment from 'moment'

const RepositoryTable = ({loading, data}) => {

    const columns = [
        {title: 'Fecha', dataIndex: 'updated_at', render: (updated_at)=>{ return Moment(updated_at).format('DD/MM/YYYY') } },
        {title: 'Vulnerabilidad', dataIndex: 'name' },
        {title: 'URL', dataIndex: 'url', render: url => <a rel="noopener noreferrer" target='_blank' href={`https://github.com/${url}`} >{url}</a> },
        {title: 'Archivo', dataIndex: 'file'}
    ]

    return (
        <Styles>
            <Table 
                rowKey = {'id'}
                columns={columns}
                dataSource={data}
                loading={loading}
            />
        </Styles>
    )
}

export default RepositoryTable