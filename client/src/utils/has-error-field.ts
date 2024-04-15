export function hasErrorField (err: unknown): err is { date: { error: string }} {
    return (
        typeof err === 'object' &&
        err !== null &&
        'data' in err &&
        typeof err.data === 'object' &&
        err.data !== null &&
        'error' in err.data
    )
}

//проверка что error типа string