import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-verify-via-nafath-contest-header.html';
import body from '@/components/exact/en-sa-verify-via-nafath-contest-body.html';
import footer from '@/components/exact/en-sa-verify-via-nafath-contest-footer.html';
import inline from '@/components/exact/en-sa-verify-via-nafath-contest.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
