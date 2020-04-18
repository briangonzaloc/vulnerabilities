import React from 'react'
import {Table} from 'antd'
import Styles from './Styles'

const RepositoryTable = ({loading, data}) => {

    const columns = [
        {title: 'Fecha', dataIndex: 'date'},
        {title: 'Vulnerabilidad', dataIndex: 'vulnerability_id', 
            render: vulnerability_id => { return vulnerability_id === 1 ? 'EXTRACT' : 'SQL injection' }
        },
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
                expandedRowRender = {record => <p>{record.code}</p>}
            />
        </Styles>
    )
}

export default RepositoryTable