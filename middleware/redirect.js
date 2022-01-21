export default function ({ route, redirect }) {
  if (route.path.slice(-1) !== '/') {
    const search = route.fullPath.match(/\?.*$/)
    // クエリパラメータがあるとき、消さないようにリダイレクトさせる
    if (search) {
      const redirectUrl = route.path + '/' + search[0]
      return redirect(301, redirectUrl)
    } else {
      const redirectUrl = route.path + '/'
      return redirect(301, redirectUrl)
    }
  }
}
