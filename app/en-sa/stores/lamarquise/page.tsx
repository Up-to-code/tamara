import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-lamarquise-header.html';
import body from '@/components/exact/en-sa-stores-lamarquise-body.html';
import footer from '@/components/exact/en-sa-stores-lamarquise-footer.html';
import inline from '@/components/exact/en-sa-stores-lamarquise.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
