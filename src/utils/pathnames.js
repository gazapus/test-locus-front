const Paths = {
    server: process.env.REACT_APP_HOST || 'http://localhost:3000',
    home: '/',
    test_form: '/test/form',
    test_instrucction: '/test/instrucctions',
    test_play: '/test/play',
    test_end: '/test/end',
    test_endFree: '/test/endfree',
    login: '/login',
    register: '/register',
    confirmation: '/confirmation/:user_id',
    start_test: '/test/start/:username',
    link_test: '/personal/link',
    results: '/personal/results',
    profile: '/personal/profile',
    confirm_change: '/confirm-change/:id',
    cancel_change: '/cancel-change/:id',
    restart_password: '/restart-password/:id'
}

export default Paths;