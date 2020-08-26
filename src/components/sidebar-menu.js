import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const SideMainMenu = () => (
    <MainMenu>
        <MenuItem>
            <Link
            to="/"
            >
            Home
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
            to="/service-offerings/"
            >
            Service Offerings
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
            to="/differentiators/"
            >
            Differentiators
            </Link>
        </MenuItem>
        <MenuItem>
            <a href="https://optomi.com/jobs/#/jobs" target="_blank" rel="noopener noreferrer" aria-label="Link">Job Portal</a>
        </MenuItem>
        <MenuItem>
            <Link
            to="/candidates/"
            >
            For Candidates
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
            to="/clients/"
            >
            For Clients
            </Link>
        </MenuItem>
        <MenuItem>
            <a href="https://optomi.com/" target="_blank" rel="noopener noreferrer" aria-label="Link">Join our Team</a>
        </MenuItem>
        <MenuItem>
            <a href="https://optomi.com/" target="_blank" rel="noopener noreferrer" aria-label="Link">Leadership</a>
        </MenuItem>
        <MenuItem>
            <a href="https://optomi.com/" target="_blank" rel="noopener noreferrer" aria-label="Link">Giving Back</a>
        </MenuItem>
        <MenuItem>
            <a href="https://optomi.com/" target="_blank" rel="noopener noreferrer" aria-label="Link">Press</a>
        </MenuItem>
        <MenuItem>
            <a href="https://optomi.com/" target="_blank" rel="noopener noreferrer" aria-label="Link">Blog</a>
        </MenuItem>
        <MenuItem>
            <Link
            to="/contact/"
            >
            Contact
            </Link>
        </MenuItem>
    </MainMenu>
  )

const MainMenu = styled.ul`
    list-style: none;
    padding: 30px;
    margin: 0;
`

const MenuItem = styled.li`
    margin: 0 0 10px;
    letter-spacing: 1px;
    font-size: 18px;
    font-family: "Helvetica Thin";
    a {
        letter-spacing: 1px;
        font-size: 18px;
        color: #61b1e8;
        text-decoration: none;
        transition-duration: .3s;
        &:hover {
            color: #fff;
        }
    }
`

export default SideMainMenu