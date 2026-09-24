import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-home-header.html';
import body from '@/components/exact/en-sa-home-body.html';
import footer from '@/components/exact/en-sa-home-footer.html';
import inline from '@/components/exact/en-sa-home.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
