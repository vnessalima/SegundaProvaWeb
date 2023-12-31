import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"
import { Link } from "react-router-dom"
import { useState } from "react"

const MyMenuV1 = () => {

    const [anchorElProfessor, setAnchorElProfessor] = useState(null) 
    const [anchorElAluno, setAnchorElAluno] = useState(null) //diz respeito ao elemento HTML do botão alunos

    const handleOpenProfessorMenu = (event) => { //abrir as opções de professor
        setAnchorElProfessor(event.currentTarget)
    }
    const handleCloseProfessorMenu = () => { //fechar as opções de professsor
        setAnchorElProfessor(null)
    }

    const handleOpenAlunoMenu = (event) => {
        setAnchorElAluno(event.currentTarget)
    }
    const handleCloseAlunoMenu = () => {
        setAnchorElAluno(null)
    }

    const profDropMenu = () => {
        return (
            <Box>
                <Button
                    sx={{
                        my: 2, color: "white"
                    }}
                    onClick={handleOpenProfessorMenu}
                >
                    Professores
                </Button>
                <Menu
                    anchorEl={anchorElProfessor}
                    open={Boolean(anchorElProfessor)}
                    onClose={handleCloseProfessorMenu}
                >
                    <MenuItem
                        onClick={handleCloseProfessorMenu}
                        component={Link}
                        to={"cadastrarProfessor"} 
                    >
                        <Typography>Cadastrar</Typography>
                    </MenuItem>

                    <MenuItem
                        onClick={handleCloseProfessorMenu}
                        component={Link}
                        to={"listarProfessor"} 
                    >
                        <Typography>Listar</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        )
    }
    const aluDropMenu = () => {
        return (
            <Box>
                <Button
                    sx={{
                        my: 2, color: "white"
                    }}
                    onClick={handleOpenAlunoMenu}
                >
                    Alunos
                </Button>
                <Menu
                    anchorEl={anchorElAluno}
                    open={Boolean(anchorElAluno)}
                    onClose={handleCloseAlunoMenu}
                >
                    <MenuItem
                        onClick={handleCloseAlunoMenu}
                        component={Link}
                        to={"cadastrarAluno"} 
                    >
                        <Typography>Cadastrar</Typography>
                    </MenuItem>

                    <MenuItem
                        onClick={handleCloseAlunoMenu}
                        component={Link}
                        to={"listarAluno"} 
                    >
                        <Typography>Listar</Typography>
                    </MenuItem>

                    <MenuItem
                        onClick={handleCloseAlunoMenu}
                        component={Link}
                        to={"listarAprovados"} 
                    >
                        <Typography>Listar Alunos Aprovados</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        )
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <AdbIcon
                        sx={{
                            display: "flex",
                            mr: 1
                        }}
                    />
                    <Typography
                        variant="h5"
                        component="a"
                        href="/"
                        sx={{

                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".2rem",
                            color: "white",
                            textDecoration: "none"
                        }}
                    >
                        CRUD V1
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flex: 1,
                            alignItems: "center",
                            ml: 3
                        }}
                    >
                        {profDropMenu()}
                        <Button
                            sx={{
                                my: 2, color: "white"
                            }}
                        >
                            {aluDropMenu()}
                        </Button>
                        <Button
                            sx={{
                                my: 2, color: "white"
                            }}
                            onClick={() => alert("Clicou em Sobre!")}
                        >
                            Sobre
                        </Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default MyMenuV1