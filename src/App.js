import 'antd/dist/antd.css';
import './App.css';
import { Button, Input, Select, Upload, Spin, Radio } from 'antd';
import { useState } from 'react';
import { PoweroffOutlined } from '@ant-design/icons'
import { UserOutlined } from '@ant-design/icons'

function App() {

  const [loading, setLoading] = useState(false)

  const fruits = ['Banana', 'Mango', 'Orange', 'Cherry']

  const onButtonClick = (e) => {
    console.log("button clicked")
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>
        <Input
          placeholder='输入你的问题'
          prefix={<UserOutlined />}
          allowClear
        ></Input>
        <br />
        <p>选择特效名称</p>
        <Select mode='multiple'
          maxTagCount={2}
          allowClear
          placeholder='选择特效'
          style={{ width: '50%' }}>
          {fruits.map((fruit, index) => {
            return <Select.Option key={index} value={fruit}>{fruit}</Select.Option>
          })}
        </Select>
        <br />
        <Upload.Dragger
          multiple
          listType='picture'
          action={'http://localhost:3000/'}
          showUploadList={{ showRemoveIcon: true }}
          accept='.png,.jpeg,.doc'
          beforeUpload={(file) => {
            console.log({ file })
            return false
          }}
          defaultFileList={
            [
              {
                uid: 'abc',
                name: 'existing_file.png',
                status: 'uploading',
                percent: 50,
                url: "https://www.google.com/"
              }
            ]
          }
          iconRender={() => {
            return <Spin></Spin>;
          }}
          // itemRender={(existingComp, file) => {
          //   return <p>{file.name}</p>;
          // }}
          progress={{
            strokeWidth: 3,
            strokeColor: {
              '0%': '#f0f',
              '100%': '#ff0'
            },
            style: { top: 12 }
          }}
        >
          <Button>Upload</Button>
        </Upload.Dragger>
        <br />
        <Button
          type="primary"
          block
          loading={loading}
          icon={<PoweroffOutlined />}
          className='my-button'
          style={{ backgroundColor: 'orange', color: 'red' }}
          onClick={onButtonClick}
        >确定</Button>
      </header>
    </div>
  );
}

export default App;
