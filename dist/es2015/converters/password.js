export class PasswordValueConverter {
    toView(value, isPassword) {
        return isPassword ? (value.length ? Array(value.length).join("•") : "") : value;
    }
    fromView(value) {
        throw new Error("Not implemented");
    }
}
