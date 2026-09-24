import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-med7-header.html';
import body from '@/components/exact/en-sa-stores-med7-body.html';
import footer from '@/components/exact/en-sa-stores-med7-footer.html';
import inline from '@/components/exact/en-sa-stores-med7.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
