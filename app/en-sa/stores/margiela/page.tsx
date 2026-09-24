import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-margiela-header.html';
import body from '@/components/exact/en-sa-stores-margiela-body.html';
import footer from '@/components/exact/en-sa-stores-margiela-footer.html';
import inline from '@/components/exact/en-sa-stores-margiela.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
