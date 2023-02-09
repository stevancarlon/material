/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export function mixinColor(base, defaultColor) {
    return class extends base {
        get color() {
            return this._color;
        }
        set color(value) {
            const colorPalette = value || this.defaultColor;
            if (colorPalette !== this._color) {
                if (this._color) {
                    this._elementRef.nativeElement.classList.remove(`mat-${this._color}`);
                }
                if (colorPalette) {
                    this._elementRef.nativeElement.classList.add(`mat-${colorPalette}`);
                }
                this._color = colorPalette;
            }
        }
        constructor(...args) {
            super(...args);
            this.defaultColor = defaultColor;
            // Set the default color that can be specified from the mixin.
            this.color = defaultColor;
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvY29yZS9jb21tb24tYmVoYXZpb3JzL2NvbG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQTZCSCxNQUFNLFVBQVUsVUFBVSxDQUN4QixJQUFPLEVBQ1AsWUFBMkI7SUFFM0IsT0FBTyxLQUFNLFNBQVEsSUFBSTtRQUl2QixJQUFJLEtBQUs7WUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQztRQUNELElBQUksS0FBSyxDQUFDLEtBQW1CO1lBQzNCLE1BQU0sWUFBWSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRWhELElBQUksWUFBWSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDZixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7aUJBQ3ZFO2dCQUNELElBQUksWUFBWSxFQUFFO29CQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sWUFBWSxFQUFFLENBQUMsQ0FBQztpQkFDckU7Z0JBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7YUFDNUI7UUFDSCxDQUFDO1FBRUQsWUFBWSxHQUFHLElBQVc7WUFDeEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFyQmpCLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1lBdUIxQiw4REFBOEQ7WUFDOUQsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7UUFDNUIsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QWJzdHJhY3RDb25zdHJ1Y3RvciwgQ29uc3RydWN0b3J9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuQ29sb3Ige1xuICAvKiogVGhlbWUgY29sb3IgcGFsZXR0ZSBmb3IgdGhlIGNvbXBvbmVudC4gKi9cbiAgY29sb3I6IFRoZW1lUGFsZXR0ZTtcblxuICAvKiogRGVmYXVsdCBjb2xvciB0byBmYWxsIGJhY2sgdG8gaWYgbm8gdmFsdWUgaXMgc2V0LiAqL1xuICBkZWZhdWx0Q29sb3I6IFRoZW1lUGFsZXR0ZSB8IHVuZGVmaW5lZDtcbn1cblxudHlwZSBDYW5Db2xvckN0b3IgPSBDb25zdHJ1Y3RvcjxDYW5Db2xvcj4gJiBBYnN0cmFjdENvbnN0cnVjdG9yPENhbkNvbG9yPjtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgSGFzRWxlbWVudFJlZiB7XG4gIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmO1xufVxuXG4vKiogUG9zc2libGUgY29sb3IgcGFsZXR0ZSB2YWx1ZXMuICovXG5leHBvcnQgdHlwZSBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJyB8IHVuZGVmaW5lZDtcblxuLyoqIE1peGluIHRvIGF1Z21lbnQgYSBkaXJlY3RpdmUgd2l0aCBhIGBjb2xvcmAgcHJvcGVydHkuICovXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5Db2xvcjxUIGV4dGVuZHMgQWJzdHJhY3RDb25zdHJ1Y3RvcjxIYXNFbGVtZW50UmVmPj4oXG4gIGJhc2U6IFQsXG4gIGRlZmF1bHRDb2xvcj86IFRoZW1lUGFsZXR0ZSxcbik6IENhbkNvbG9yQ3RvciAmIFQ7XG5leHBvcnQgZnVuY3Rpb24gbWl4aW5Db2xvcjxUIGV4dGVuZHMgQ29uc3RydWN0b3I8SGFzRWxlbWVudFJlZj4+KFxuICBiYXNlOiBULFxuICBkZWZhdWx0Q29sb3I/OiBUaGVtZVBhbGV0dGUsXG4pOiBDYW5Db2xvckN0b3IgJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfY29sb3I6IFRoZW1lUGFsZXR0ZTtcbiAgICBkZWZhdWx0Q29sb3IgPSBkZWZhdWx0Q29sb3I7XG5cbiAgICBnZXQgY29sb3IoKTogVGhlbWVQYWxldHRlIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgICB9XG4gICAgc2V0IGNvbG9yKHZhbHVlOiBUaGVtZVBhbGV0dGUpIHtcbiAgICAgIGNvbnN0IGNvbG9yUGFsZXR0ZSA9IHZhbHVlIHx8IHRoaXMuZGVmYXVsdENvbG9yO1xuXG4gICAgICBpZiAoY29sb3JQYWxldHRlICE9PSB0aGlzLl9jb2xvcikge1xuICAgICAgICBpZiAodGhpcy5fY29sb3IpIHtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgbWF0LSR7dGhpcy5fY29sb3J9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbG9yUGFsZXR0ZSkge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBtYXQtJHtjb2xvclBhbGV0dGV9YCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jb2xvciA9IGNvbG9yUGFsZXR0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICAgIC8vIFNldCB0aGUgZGVmYXVsdCBjb2xvciB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZnJvbSB0aGUgbWl4aW4uXG4gICAgICB0aGlzLmNvbG9yID0gZGVmYXVsdENvbG9yO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==