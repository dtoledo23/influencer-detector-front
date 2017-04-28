<template>
        <div class="echarts">
            <IEcharts :option="bar"></IEcharts>
        </div>
    </template>

    <script>
        import IEcharts from 'vue-echarts-v3';

        export default {
            name: 'view',
            components: {
                IEcharts
            },
            props: ['info'],
            mounted(){
                this.loadData()
            },
            methods: {
                loadData() {
                    this.bar.title.text = this.info.title;
                    this.bar.series[0].data = this.info.data.sort(function (a, b) { return a.value - b.value});
                },
            },
            data: () => ({
                bar: {
                    title: {
                        left: 'center',
                        top: 20,
                        textStyle: {
                            color: '#ccc'
                        }
                    },

                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },

                    visualMap: {
                        show: false,
                        min: 80,
                        max: 600,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    series : [
                    {
                        name: '',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '50%'],
                        roseType: 'angle',
                        label: {
                            normal: {
                                textStyle: {
                                    color: 'rgba(255, 255, 255, 0.3)'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: 'rgba(255, 255, 255, 0.3)'
                                },
                                smooth: 0.2,
                                length: 10,
                                length2: 20
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'blue',
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },

                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function (idx) {
                            return Math.random() * 200;
                        }
                    }
                    ]
                }
            })
        };
    </script>

    <style scoped>
        .echarts {
            width: 400px;
            height: 400px;
        }
    </style>