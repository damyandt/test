function raft(N, K, weights) {
    weights.sort((a, b) => b - a);
    let minCapacity = weights[0];
    let weightsCopy = [];
    let boolean = true;
    let times = 0;
    let sum = 0;

    for (let i = 0; i < N; i++) {
        weightsCopy.push(weights[i])
    }
    weightsCopy.sort((a, b) => b - a);

    while (boolean) {

        for (let i = 0; i < weightsCopy.length; i++) {
            sum += weightsCopy.shift();

            for (let j = 0; j < weightsCopy.length; j++) {
                if ((sum + weightsCopy[j]) <= minCapacity) {
                    sum += weightsCopy[j];
                    weightsCopy.splice(j, 1);
                    j--;
                }
                if (times > K && boolean) {
                    weightsCopy = weights;
                    minCapacity++;
                    times = 0;
                    break;
                }
            }
            sum = 0;
            if (weightsCopy != weights) {
                times++;
            }

            if (times > K && boolean) {
                weightsCopy = [];
                for (let i = 0; i < weights.length; i++) {
                    weightsCopy.push(weights[i])
                }
                weightsCopy.sort((a, b) => b - a);
                minCapacity++;
                times = 0;
            }

            if (weightsCopy.length == 0) {
                console.log(minCapacity)
                boolean = false;
                break;
            }
        }
    }
}

// let N = 26;
// let K = 5;
// let weights = [52, 17946, 27160, 387, 17346, 27505, 20816, 20577, 10961, 6021, 5262, 28278, 24163, 931, 11003, 19738, 17914, 1683, 10320, 10475];
 let N = 7;
 let K = 2;
 let weights = [2, 15, 20, 5, 8, 10, 12];

raft(N, K, weights);