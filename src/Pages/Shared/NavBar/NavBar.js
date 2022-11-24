import { useState, useEffect, useContext } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Logo from '../../../assets/logo.png'
import { AuthContext } from "../../../Context/AuthProvider";
import Loading from "../../../Components/Loading/Loading";

const NavBar = () => {
    const { user, userLogOut, loading, setLoading } = useContext(AuthContext)
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const handleLogOut = () => {
        setLoading(true)
        userLogOut()
            .then(() => {
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
    }
    if(loading){
        return <Loading/>
    }
    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="" style={{ textShadow: '0 1px 3px #474747' }} className="flex items-center text-[17px] font-bold text-gray-200">
                    Pages
                </Link>
            </Typography>
            <Typography
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="" style={{ textShadow: '0 1px 3px #474747' }} className="flex items-center text-[17px] font-bold text-gray-200">
                    Account
                </Link>
            </Typography>
            <Typography
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="" style={{ textShadow: '0 1px 3px #474747' }} className="flex items-center text-[17px] font-bold text-gray-200">
                    Blocks
                </Link>
            </Typography>
            <Typography
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="" style={{ textShadow: '0 1px 3px #474747' }} className="flex items-center text-[17px] font-bold text-gray-200">
                    Docs
                </Link>
            </Typography>
        </ul>
    );

    return (
        <Navbar color="teal" className="mx-auto py-2 px-4 mt-2 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <div className="flex items-center gap-3">
                    <img src={Logo} alt="" className="w-10 h-10" />
                    <Typography
                        to=""
                        variant="h4"
                        className="mr-4 cursor-pointer py-1.5 font-bold text-white"
                    >
                        <Link style={{ textShadow: '0 1px 5px black' }} to='/'>MOTO DREAM</Link>
                    </Typography>
                </div>
                <div className="hidden lg:block">{navList}</div>
                {
                    user?.uid ?
                        <>
                            <Link onClick={handleLogOut}>
                                <Button variant="gradient" color="amber" size="md" className="hidden lg:inline-block">
                                    Sign out
                                </Button>
                            </Link>
                        </>
                        :
                        <>
                            <Link to='/signin'>
                                <Button variant="gradient" color="amber" size="md" className="hidden lg:inline-block">
                                    Sign in
                                </Button>
                            </Link>
                        </>
                }
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                {navList}
                <Button variant="gradient" color="amber" size="md" fullWidth className="mb-2">
                    <span>Sign In</span>
                </Button>
            </MobileNav>
        </Navbar>
    );
}
export default NavBar;