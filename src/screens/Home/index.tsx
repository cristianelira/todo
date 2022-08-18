import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Alert
} from 'react-native'

import { Task } from '../../components/Task'

import { styles } from './styles'

export default function Home() {
  const [active, setActive] = useState(false) //estado para a borda do input
  const [tasks, setTasks] = useState<string[]>([])
  const [tasksDescr, setTasksDescr] = useState('')

  function handleTaskAdd() {
    if (tasks.includes(tasksDescr)) {
      //verifica se ja existe
      return Alert.alert('Já existe!', 'Já existe essa tarefa')
    }

    setTasks(prevState => [...prevState, tasksDescr]) //pega oq digitou e adiciona ao estado atual ao array das tasks
    setTasksDescr('') //deixa vazio o input
  }

  function handleTaskRemove(tasksDescr: string) {
    Alert.alert('Remover?', `Remover a tarefa selecionada?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () =>
          setTasks(prevState => prevState.filter(tasks => tasks !== tasksDescr)) //qnd pressiona sim filtra no array a tarefa selecionada e exclui ela
      }
    ])
  }



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.centraLogo}>
          <Image style={styles.logoTodo} source={require('./image/Logo.png')} />
        </View>
      </View>

      <View style={styles.inclui}>
        <TextInput
          onFocus={() => setActive(true)}
          style={[
            styles.input,
            { borderColor: active ? 'hsla(239, 53%, 59%, 1)' : '#262626' }
          ]} //mudar a cor da borda qnd selecionado
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onEndEditing={() => setActive(false)}
          onChangeText={text => setTasksDescr(text)}
          value={tasksDescr}
        />

        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Image style={styles.plus} source={require('./image/plus.png')} /> 
        </TouchableOpacity>
        
      </View>

      <View style={styles.content}>
        <View style={styles.counters}> 
          <View style={styles.borderNum}>
            <Text style={styles.created}>Criadas</Text>
            <Text style={styles.counterNum}> 0 </Text>
          </View>

          <View style={styles.borderNum}>
            <Text style={styles.done}>Concluidas</Text>
            <Text style={styles.counterNum}> 0 </Text>
          </View>
        </View>

        <View style={styles.tasks}>
          <FlatList
            data={tasks}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <Task
                key={item}
                task={item}
                
                onRemove={() => handleTaskRemove(item)} 
              />
            )}
            ListEmptyComponent={() => (
              <View >
                <View style={styles.listEmptyText}>
                  <ImageBackground
                    style={styles.clipBoard}
                    source={require('./image/Clipboard.png')}
                  ></ImageBackground>
                  <Text style={styles.textEmpty}>
                    Você ainda não tem tarefas cadastradas
                  </Text>
                  <Text style={styles.textEmpty2}>
                    Crie tarefas e organize seus itens a fazer
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  )
}
