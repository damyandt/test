function raft(input) {
    const N = input[0].split(" ")[0];
    const K = input[0].split(" ")[1];
    const weights = input[1].split(" ");
    weights.sort((a, b) => b - a);
    if (N < 1 || N > 1000 || K < 1 || K > 1000) {
        return console.log("Error");
    }

    for (let m = 0; m < weights.length; m++) {
        if (weights[m] > 100000 || weights[m] < 1) {
            return console.log("Error");
        }
    }

    let minCapacity = weights[0];
    let weightsCopy = [];
    let boolean = true;
    let times = 0;
    let sum = 0;

    for (let i = 0; i < N; i++) {
        weightsCopy.push(Number(weights[i]));
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
                    weightsCopy.push(Number(weights[i]));
                }
                weightsCopy.sort((a, b) => b - a);
                minCapacity++;
                times = 0;
            }

            if (weightsCopy.length == 0) {
                console.log(minCapacity);
                boolean = false;
                break;
            }
        }
    }
}

// raft(["20 3", "52 17946 27160 387 17346 27505 20816 20577 10961 6021 5262 28278 24163 931 11003 19738 17914 1683 10320 10475"]);
raft(["20 3", "52 17946 27160 387 17346 27505 20816 20577 10961 6021 5262 28278 24163 931 11003 19738 17914 1683 10320 10475"]);