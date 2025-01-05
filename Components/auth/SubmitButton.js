import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const SubmitButton = ({title, handleSubmit, loading}) => (
    <TouchableOpacity
        onPress={handleSubmit}
        style={{
          marginHorizontal: 24,
          marginTop: 14,
          paddingVertical: 14,
          backgroundColor: "#2196f3",
          borderRadius: 24,
        }}
        >
          <Text style={{
            textAlign: 'center',
            fontWeight: 600,
            color: "white",
            fontSize: 16
          }}>
            { loading ? "Please wait..." : title}
          </Text>
      </TouchableOpacity>
)

export default SubmitButton