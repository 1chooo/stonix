import { Badge } from "@/components/ui/badge";
import { getGitHubStars } from "@/lib/github";
import { numberFormatter } from "@/lib/utils";

export async function GitHubStars() {
  const stars = await getGitHubStars();
  return (
    <>
      <Badge variant="secondary" className="ml-1 hidden sm:block">
        {numberFormatter(stars)}
      </Badge>
      <Badge variant="secondary" className="ml-1 block sm:hidden">
        {stars}
      </Badge>
    </>
  );
}

export function GitHubStarsFallback() {
  return (
    <Badge variant="secondary" className="ml-1">
      ~
    </Badge>
  );
}
