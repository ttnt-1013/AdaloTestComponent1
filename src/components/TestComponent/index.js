import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function getData(items){
	try {
		return items.map(({ id, data1 }) => 
					{return {"id": id, "data1": data1}}
				)
	} catch (error) {
		return []
	}
}

const TestComponent = (props) => {
	const { items } = props

	let data = getData(items)
	// let data = [{id: "1", "data1": "test"}]
	return(
		<View style={styles.wrapper}>
			<Text>data</Text>
			{data[0] && ( data[0].id && <Text>{data[0].id}</Text>)}
			{data[0] && ( data[0].data1 && <Text>{data[0].data1}</Text>)}
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default TestComponent
