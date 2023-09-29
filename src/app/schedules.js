const beginner = {
    1: {
        miles: ['Rest', '3 miles', '3 miles', '3 miles', 'Rest', '6 miles', 'Cross-Training'],
        kms: ['Rest', '4.8 kms', '4.8 kms', '4.8 kms', 'Rest', '9.7 kms', 'Cross-Training']
    },
    2: {
        miles: ['Rest', '3 miles', '3 miles', '3 miles', 'Rest', '7 miles', 'Cross-Training'],
        kms: ['Rest', '4.8 kms', '4.8 kms', '4.8 kms', 'Rest', '11.3 kms', 'Cross-Training']
    },
    3: {
        miles: ['Rest', '3 miles', '4 miles', '3 miles', 'Rest', '5 miles', 'Cross-Training'],
        kms: ['Rest', '4.8 kms', '6.4 kms', '4.8 kms', 'Rest', '8.1 kms', 'Cross-Training']
    },
    4: {
        miles: ['Rest', '3 miles', '4 miles', '3 miles', 'Rest', '9 miles', 'Cross-Training'],
        kms: ['Rest', '4.8 kms', '6.4 kms', '4.8 kms', 'Rest', '14.5 kms', 'Cross-Training']
    },
    5: {
        miles: ['Rest', '3 miles', '5 miles', '3 miles', 'Rest', '10 miles', 'Cross-Training'],
        kms: ['Rest', '4.8 kms', '8.1 kms', '4.8 kms', 'Rest', '16.1 kms', 'Cross-Training']
    },
    6: {
        miles: ['Rest', '3 miles', '5 miles', '3 miles', 'Rest', '7 miles', 'Cross-Training'],
        kms: ['Rest', '4.8 kms', '8.1 kms', '4.8 kms', 'Rest', '11.3 kms', 'Cross-Training']
    },
    7: {
        miles: ['Rest', '3 miles', '6 miles', '3 miles', 'Rest', '12 miles', 'Cross-Training'],
        kms: ['Rest', '4.8 kms', '9.7 kms', '4.8 kms', 'Rest', '19.3 kms', 'Cross-Training']
    },
    8: {
        miles: ['Rest', '3 miles', '6 miles', '3 miles', 'Rest', 'Rest', 'Half-Marathon'],
        kms: ['Rest', '4.8 kms', '9.7 kms', '4.8 kms', 'Rest', 'Rest', 'Half-Marathon']
    },
    9: {
        miles: ['Rest', '3 miles', '7 miles', '4 miles', 'Rest', '10 miles', 'Cross-Training'],
        kms: ['Rest', '4.8 kms', '11.3 kms', '6.4 kms', 'Rest', '16.1 kms', 'Cross-Training']
    },
    10: {
        miles: ['Rest', '3 miles', '7 miles', '4 miles', 'Rest', '15 miles', 'Cross-Training'],
        kms: ['Rest', '4.8 kms', '11.3 kms', '6.4 kms', 'Rest', '24.1 kms', 'Cross-Training']
    },
    11: {
        miles: ['Rest', '4 miles', '8 miles', '4 miles', 'Rest', '16 miles', 'Cross-Training'],
        kms: ['Rest', '6.4 kms', '12.9 kms', '6.4 kms', 'Rest', '25.7 kms', 'Cross-Training']
    },
    12: {
        miles: ['Rest', '4 miles', '8 miles', '5 miles', 'Rest', '12 miles', 'Cross-Training'],
        kms: ['Rest', '6.4 kms', '12.9 kms', '8.1 kms', 'Rest', '19.3 kms', 'Cross-Training']
    },
    13: {
        miles: ['Rest', '4 miles', '9 miles', '5 miles', 'Rest', '18 miles', 'Cross-Training'],
        kms: ['Rest', '6.4 kms', '14.5 kms', '8.1 kms', 'Rest', '29 kms', 'Cross-Training']
    },
    14: {
        miles: ['Rest', '5 miles', '9 miles', '5 miles', 'Rest', '14 miles', 'Cross-Training'],
        kms: ['Rest', '8.1 kms', '14.5 kms', '8.1 kms', 'Rest', '22.5 kms', 'Cross-Training']
    },
    15: {
        miles: ['Rest', '5 miles', '10 miles', '5 miles', 'Rest', '20 miles', 'Cross-Training'],
        kms: ['Rest', '8.1 kms', '16.1 kms', '8.1 kms', 'Rest', '32.2 kms', 'Cross-Training']
    },
    16: {
        miles: ['Rest', '5 miles', '8 miles', '4 miles', 'Rest', '12 miles', 'Cross-Training'],
        kms: ['Rest', '8.1 kms', '12.9 kms', '6.4 kms', 'Rest', '19.3 kms', 'Cross-Training']
    },
    17: {
        miles: ['Rest', '4 miles', '6 miles', '3 miles', 'Rest', '8 miles', 'Cross-Training'],
        kms: ['Rest', '6.4 kms', '9.7 kms', '4.8 kms', 'Rest', '12.9 kms', 'Cross-Training']
    },
    18: {
        miles: ['Rest', '3 miles', '4 miles', '2 miles', 'Rest', 'Rest', 'Marathon'],
        kms: ['Rest', '4.8 kms', '6.4 kms', '3.2 kms', 'Rest', 'Rest', 'Marathon']
    }
}
const intermediate = {
    1: {
        miles: ['Cross-Training', '3 miles', '5 miles', '3 miles', 'Rest', '5 pace', '8 miles'],
        kms: ['Cross-Training', '4.8 kms', '8.1 kms', '4.8 kms', 'Rest', '8.1 pace', '12.9 kms']
    },
    2: {
        miles: ['Cross-Training', '3 miles', '5 miles', '3 miles', 'Rest', '5 miles', '9 miles'],
        kms: ['Cross-Training', '4.8 kms', '8.1 kms', '4.8 kms', 'Rest', '8.1 kms', '14.5 kms']
    },
    3: {
        miles: ['Cross-Training', '3 miles', '5 miles', '3 miles', 'Rest', '5 pace', '6 miles'],
        kms: ['Cross-Training', '4.8 kms', '8.1 kms', '4.8 kms', 'Rest', '8.1 pace', '9.7 kms']
    },
    4: {
        miles: ['Cross-Training', '3 miles', '6 miles', '3 miles', 'Rest', '6 pace', '11 miles'],
        kms: ['Cross-Training', '4.8 kms', '9.7 kms', '4.8 kms', 'Rest', '9.7 pace', '17.7 kms']
    },
    5: {
        miles: ['Cross-Training', '3 miles', '6 miles', '3 miles', 'Rest', '6 pace', '12 miles'],
        kms: ['Cross-Training', '4.8 kms', '9.7 kms', '4.8 kms', 'Rest', '9.7 kms', '19.3 kms']
    },
    6: {
        miles: ['Cross-Training', '3 miles', '5 miles', '3 miles', 'Rest', '6 pace', '9 miles'],
        kms: ['Cross-Training', '4.8 kms', '8.1 kms', '4.8 kms', 'Rest', '9.7 pace', '14.5 kms']
    },
    7: {
        miles: ['Cross-Training', '4 miles', '7 miles', '4 miles', 'Rest', '7 pace', '14 miles'],
        kms: ['Cross-Training', '6.4 kms', '11.3 kms', '6.4 kms', 'Rest', '11.3 pace', '22.5 kms']
    },
    8: {
        miles: ['Cross-Training', '4 miles', '7 miles', '4 miles', 'Rest', '7 miles', '15 miles'],
        kms: ['Cross-Training', '6.4 kms', '11.3 kms', '6.4 kms', 'Rest', '11.3 kms', '24.1 kms']
    },
    9: {
        miles: ['Cross-Training', '4 miles', '5 miles', '4 miles', 'Rest', 'Rest', 'Half-Marathon'],
        kms: ['Cross-Training', '6.4 kms', '8.1 kms', '6.4 kms', 'Rest', 'Rest', 'Half-Marathon']
    },
    10: {
        miles: ['Cross-Training', '4 miles', '8 miles', '4 miles', 'Rest', '8 pace', '17 miles'],
        kms: ['Cross-Training', '6.4 kms', '12.9 kms', '6.4 kms', 'Rest', '12.9 pace', '27.4 kms']
    },
    11: {
        miles: ['Cross-Training', '5 miles', '8 miles', '5 miles', 'Rest', '8 miles', '18 miles'],
        kms: ['Cross-Training', '8.1 kms', '12.9 kms', '8.1 kms', 'Rest', '12.9 kms', '29 kms']
    },
    12: {
        miles: ['Cross-Training', '5 miles', '5 miles', '5 miles', 'Rest', '8 pace', '13 miles'],
        kms: ['Cross-Training', '8.1 kms', '8.1 kms', '8.1 kms', 'Rest', '12.9 pace', '21 kms']
    },
    13: {
        miles: ['Cross-Training', '5 miles', '8 miles', '5 miles', 'Rest', '5 pace', '20 miles'],
        kms: ['Cross-Training', '8.1 kms', '12.9 kms', '8.1 kms', 'Rest', '8.1 pace', '32.2 kms']
    },
    14: {
        miles: ['Cross-Training', '5 miles', '5 miles', '5 miles', 'Rest', '8 miles', '12 miles'],
        kms: ['Cross-Training', '8.1 kms', '8.1 kms', '8.1 kms', 'Rest', '12.9 kms', '19.3 kms']
    },
    15: {
        miles: ['Cross-Training', '5 miles', '8 miles', '5 miles', 'Rest', '5 pace', '20 miles'],
        kms: ['Cross-Training', '8.1 kms', '12.9 kms', '8.1 kms', 'Rest', '8.1 pace', '32.2 kms']
    },
    16: {
        miles: ['Cross-Training', '5 miles', '6 miles', '5 miles', 'Rest', '4 pace', '12 miles'],
        kms: ['Cross-Training', '8.1 kms', '9.7 kms', '8.1 kms', 'Rest', '6.4 pace', '19.3 kms']
    },
    17: {
        miles: ['Cross-Training', '4 miles', '5 miles', '4 miles', 'Rest', '3 miles', '8 miles'],
        kms: ['Cross-Training', '6.4 kms', '8.1 kms', '6.4 kms', 'Rest', '4.8 kms', '12.9 kms']
    },
    18: {
        miles: ['Cross-Training', '3 miles', '4 miles', 'Rest', 'Rest', '2 miles', 'Marathon'],
        kms: ['Cross-Training', '4.8 kms', '6.4 kms', 'Rest', 'Rest', '3.2 kms', 'Marathon']
    }
}
const advanced = {}


export { beginner, intermediate, advanced };