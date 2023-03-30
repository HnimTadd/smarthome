process.env.TAMAGUI_TARGET = 'native'

module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            'nativewind/babel',
            [
                '@tamagui/babel-plugin',
                {
                    components: ['tamagui'],
                    config: './tamagui.config.ts',
                    logTimings: true
                }
            ],
            [
                'transform-inline-environment-variables',
                {
                    include: 'TAMAGUI_TARGET'
                }
            ],
            'react-native-reanimated/plugin'
        ]
    }
}
