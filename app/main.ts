let version = '/* @echo VERSION */' || 'unknown';

// @ifdef DEBUG
let TOO_MUCH_MEANING = 42;
console.log(`This is DEBUG v${version}!`);
// @endif
// @ifdef PROD
console.log(`This is PROD v${version}!`);
// @endif

function add(a: number, b: number) {
    // @ifdef DEBUG
    console.log(`Adding ${a}+${b}`);
    debugger;
    // @endif
    let result = a + b;

    // @ifdef DEBUG
    if (result === TOO_MUCH_MEANING) {
        throw new Error('Such meaning, cannot bare!');
    }
    // @endif

    return result;
}
