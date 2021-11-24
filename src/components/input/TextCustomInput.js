import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Color} from '../../utils/colors';

export function TextCustomInput(props) {
  const {
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    error,
    maxLength,
    autoFocus,
    keyboardType,
    // startAdornment,
    // endAdornment,
  } = props;
  const [focused, setFocused] = useState(false);

  return (
    <View
      style={{
        ...styles.container,
        ...(error ? styles.mistake : focused ? styles.focused : styles.normal),
      }}>
      {/* {startAdornment} */}
      <TextInput
        {...props}
        style={{
          ...styles.input,
          ...(error
            ? styles.mistake
            : focused
            ? styles.focused
            : styles.normal),
        }}
        placeholder={placeholder}
        autoCapitalize="none"
        value={value}
        placeholderTextColor={Color.placeholderTextColor}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry ?? false}
        maxLength={maxLength}
        autoFocus={autoFocus ?? false}
        onFocus={event => {
          setFocused(true);
          // if (props.onFocus) {
          //   props.onFocus(event);
          // }
        }}
        onBlur={event => {
          setFocused(false);
          // if (props.onBlur) {
          //   props.onBlur(event);
          // }
        }}
        keyboardType={keyboardType}
      />
      {/* {endAdornment} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 14,
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: Color.white,
  },
  input: {
    zIndex: 0,
    flex: 1,
    textAlign: 'left',
    padding: 0,
    color: Color.darkGrey,
    // ...Typography.mediumFontSize,
    // ...Typography.light,
  },
  focused: {
    borderColor: Color.darkGrey,
  },
  normal: {
    borderColor: Color.border,
  },
  mistake: {
    borderColor: Color.error,
  },
  right: {
    textAlign: 'right',
  },
});
