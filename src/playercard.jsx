export default function PlayerCard(props) {
  return (
    <div class="max-w-xs rounded overflow-hidden shadow-lg">
      <img class="w-full" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${props.personId}.png`} alt="Player not available" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{props.firstName} {props.lastName}</div>
        <p class="text-gray-700 text-base">
        Drafted Round {props.draft.roundNum} #{props.draft.pickNum}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.position}</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  )
};