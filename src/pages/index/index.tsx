import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtCalendar } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarBackgroundColor: '#95c2e1',
    navigationBarTextStyle: 'white',
    navigationBarTitleText: 'tally report'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View className='bgb fn_f pa20 fn_w'>
          <Text className='ml20'>2019</Text>
        </View>
        <View className='pa20'>
          <AtButton type='primary'>按钮文案</AtButton>
        </View>

      </View>
    )
  }
}
