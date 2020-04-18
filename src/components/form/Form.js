import React from 'react'

import Styles from './Styles'

import { Form, Select, Button } from 'antd'

const CustomForm = ({ onSubmit }) => {
    const [form] = Form.useForm()

    
    return(
        <Styles>
            <Form 
                form={form} 
                layout="inline"
                onFinish={(values)=>{ onSubmit(values) }}
                initialValues={{
                    vulnerability: 0
                }}
            >
                <Form.Item
                    label="Vunerabilidad"
                    name="vulnerability">

                        <Select style={{ width: 200 }}>
                            <Select.Option value={0}>Todos</Select.Option>
                            <Select.Option value={1}>Extract</Select.Option>
                            <Select.Option value={2}>SQL injection</Select.Option>
                        </Select>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Buscar
                    </Button>
                </Form.Item>
            </Form>
        </Styles>
    )
}

export default CustomForm