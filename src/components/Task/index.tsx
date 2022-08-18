import { View, Text, TouchableOpacity, Image } from 'react-native'

import { styles } from './styles'

type Props = {
  task: string
  onRemove: () => void
  onCheck: () => void
}

export function Task({ task, onRemove, onCheck }: Props) {

  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => 
      <Image style={styles.checkImg}
          source={require('../../image/checkOk.png')} />}>
        <Image
          style={styles.checkImg}
          source={ state.flagImage === true ?
            require('../../image/check.png') :
            require('../../image/checkOk.png')
          }
        />
      </TouchableOpacity>

      <Text style={styles.task}>{task}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Image
            style={styles.buttonImg}
            source={require('../../image/trash.png')}
          />
      </TouchableOpacity>
    </View>
  )
}
