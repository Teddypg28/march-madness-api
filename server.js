import express from 'express'

import { teams } from './teams.js'

const app = express()
const PORT = 5000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.get('/offensive-efficiency', (req, res) => {

    const sortedTeams = teams.sort((a, b) => parseFloat(b.offensiveEfficiencyRating) - parseFloat(a.offensiveEfficiencyRating))

    const filteredTeams = sortedTeams.map((team, index) => {
        return {rank: index+1, teamName: team.teamName, offensiveEfficiency: team.offensiveEfficiencyRating}
    })

    return res.send(filteredTeams)

})

app.get('/defensive-efficiency', (req, res) => {

    const sortedTeams = teams.sort((a, b) => parseFloat(a.defensiveEfficiencyRating) - parseFloat(b.defensiveEfficiencyRating))

    const filteredTeams = sortedTeams.map((team, index) => {
        return {rank: index+1, teamName: team.teamName, defensiveEfficiency: team.defensiveEfficiencyRating}
    })

    return res.send(filteredTeams)

})

app.get('/close-game-win-percentage', (req, res) => {

    const sortedTeams = teams.sort((a, b) => parseFloat(b.closeGameWinPercentage) - parseFloat(a.closeGameWinPercentage))

    const filteredTeams = sortedTeams.map((team, index) => {
        return {rank: index+1, teamName: team.teamName, closeGameWinPercentage: team.closeGameWinPercentage}
    })

    return res.send(filteredTeams)
    
})

app.get('/made-threes-per-game', (req, res) => {

    const sortedTeams = teams.sort((a, b) => parseFloat(b.madeThreesPerGame) - parseFloat(a.madeThreesPerGame))

    const filteredTeams = sortedTeams.map((team, index) => {
        return {rank: index+1, teamName: team.teamName, madeThreesPerGame: team.madeThreesPerGame}
    })

    return res.send(filteredTeams)
    
})

app.get('/three-point-percentages', (req, res) => {
    const sortedTeams = teams.sort((a, b) => parseFloat(b.threePointPercentage) - parseFloat(a.threePointPercentage))

    const filteredTeams = sortedTeams.map((team, index) => {
        return {rank: index+1, teamName: team.teamName, percentage: team.threePointPercentage}
    })

    return res.send(filteredTeams)
})


app.get('/opponent-ppg', (req, res) => {
    const sortedTeams = teams.sort((a, b) => parseFloat(a.opponentPointsPerGame) - parseFloat(b.opponentPointsPerGame))

    const filteredTeams = sortedTeams.map((team, index) => {
        return {rank: index+1, teamName: team.teamName, opponentPpg: team.opponentPointsPerGame, ppg: team.pointsPerGame}
    })

    return res.send(filteredTeams)
})


app.get('/points-per-game', (req, res) => {
    const sortedTeams = teams.sort((a, b) => parseFloat(b.pointsPerGame) - parseFloat(a.pointsPerGame))

    const filteredTeams = sortedTeams.map((team, index) => {
        return {rank: index+1, teamName: team.teamName, ppg: team.pointsPerGame, opponentPointsPerGame: team.opponentPointsPerGame}
    })

    return res.send(filteredTeams)
})